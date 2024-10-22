import { useEffect, useState } from "react";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { MainButton } from "../../components/micro-components/main-button";
import { RegisterBenefitModal } from "./register-benefit-modal";
import { api } from "../../lib/axios";
import { NoProducts } from "../../components/micro-components/no-products";
import { BenefitCardActive } from "../../components/macro-components/benefit-card-active";
import { BenefitCardRequests } from "./benefit-card-requests";

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
    user?: {
        name: string;
    }
  }

export function BenefitAdmin(){

    const [ benefits, setBenefits ] = useState<benefit[]>([]);
    const [ benefitsRequests, setBenefitsRequests ] = useState<benefit[]>([]);
    const [ isOpenRegisterModal, setIsOpenRegisterModal ] = useState<boolean>(false);
    const [ isOpenRequests, setIsOpenRequests ] = useState<boolean>(false);

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

    async function getRequests(){
        api.get(`/v3/benefit/requests`)
        .then((json) => {
            const data = json.data;
            setBenefitsRequests(data.map((benefit: benefit) => ({
                id: benefit.id,
                status: benefit.status,
                dateTime: benefit.dateTime,
                benefitActive: {
                    id: benefit.benefitActive.id,
                    title: benefit.benefitActive.title,
                    description: benefit.benefitActive.description
                },
                user: {
                    name: benefit.user.name, 
                }
            }))) 
        })
    };

    useEffect(() => {
        getBenefits();
        getRequests();
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
                    {isOpenRequests ? (
                        <MainButton onClick={() => setIsOpenRequests(false)}>Fechar Solicitações</MainButton>
                    ) : (
                        <MainButton onClick={() => setIsOpenRequests(true)}>Solicitações</MainButton>
                    )}
                </div>
            </div>

            {isOpenRequests ? (
                benefitsRequests.length < 0 ? (<NoProducts />) : (
                    benefitsRequests.map((benefit : benefit) => (
                        <BenefitCardRequests 
                            description={benefit.benefitActive.description}
                            title={benefit.benefitActive.title}
                            dateTime={benefit.dateTime}
                            name={benefit.user?.name}
                            status={benefit.status === "SENT" ? "ENVIADO" : 
                                benefit.status === "NOT_APPROVED" ? "NÃO APROVADO" : "APROVADO"}
                        />
                    ))
                )
            ) : (

                benefits.length < 0 ? ( <NoProducts />) : (
                    benefits.map((benefit: benefit) => (
                        <BenefitCardActive 
                            key={benefit.id}
                            id={benefit.id}
                            title={benefit.title}
                            description={benefit.description}
                        />
                    ))
                )
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