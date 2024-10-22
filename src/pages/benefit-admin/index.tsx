import { useState } from "react";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { MainButton } from "../../components/micro-components/main-button";
import { RegisterBenefitModal } from "./register-benefit-modal";

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

    const [ isOpenRegisterModal, setIsOpenRegisterModal ] = useState<boolean>(false);



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