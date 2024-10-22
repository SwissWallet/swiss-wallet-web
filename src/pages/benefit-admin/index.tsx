import { useEffect, useState } from "react";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { MainButton } from "../../components/micro-components/main-button";
import { RegisterBenefitModal } from "./register-benefit-modal";
import { api } from "../../lib/axios";
import { NoProducts } from "../../components/micro-components/no-products";
import { BenefitCardActive } from "../../components/macro-components/benefit-card-active";

interface benefit {
    id: string;
    title: string;
    description: string;
    status?: string;
    dateTime?: string;
    benefitActive?: {
      id: string;
      title: string;
      description: string;
    };
  }

export function BenefitAdmin(){

    const [ benefits, setBenefits ] = useState<benefit[]>([]);
    const [ isOpenRegisterModal, setIsOpenRegisterModal ] = useState<boolean>(false);

    async function getBenefits(){
        api.get(`/v3/benefit/actives`)
        .then((json) => {
            const data = json.data;
            setBenefits(data.map((benefit: benefit) =>  ({
                id: benefit.id,
                title: benefit.title,
                description: benefit.description,
            })))
        })
    };

    useEffect(() => {
        getBenefits();
    }, []);

    



    return(
        <div className="bg-default-gray">
        <Navbar />
        <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">

            <div className="flex justify-between items-center">
                <HeaderOnPages
                    title="Beneficíos"
                    description="Confira a lista de beneficios de assinantes da AAPM"
                    notFilterAndOrder={true}
                />
                <div className="flex gap-2">
                    <MainButton onClick={() => setIsOpenRegisterModal(true)} >Novo Produto</MainButton>
                    <MainButton>Solicitações</MainButton>
                </div>
            </div>

            {benefits.length < 0 ? ( <NoProducts />) : (
                benefits.map((benefit: benefit) => (
                    <BenefitCardActive 
                        key={benefit.id}
                        id={benefit.id}
                        title={benefit.title}
                        description={benefit.description}
                    />
                ))
            )}



        </main>
        <Footer />

        {isOpenRegisterModal && (
            <RegisterBenefitModal 
                setIsOpenRegisterModal={setIsOpenRegisterModal}
            />
        )}
    </div>
    )
};