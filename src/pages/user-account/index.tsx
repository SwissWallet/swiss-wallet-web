import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { ChangeInfoUser } from "./line-change-info-user";
import { InfoUser } from "./line-info-user";
import { UpdateButton } from "../../components/micro-components/update-button";
import { ChangePassworModal } from "./changepassword-modal";
import { useState } from "react";



export function UserAccount() {

    const [isEditable, setIsEditable] = useState(false);
    const [zipCode, setZipCode] = useState('11590-130');
    const [complement, setComplement] = useState('Apto 202, Bloco B');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleState = () => {
        setIsEditable(!isEditable);
    };

    const doNothing = () => {};

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }





    return (
        <div className="bg-default-gray">
            <Navbar />

            <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">

                <div className="flex flex-col justify-start">
                    <h1 className="font-bold text-4xl">Dados pessoais</h1>
                    <p className="italic font-medium">Informações do usuário</p>
                </div>

                <section className="ml-20 mr-20">
                    <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md">
                        <div className="flex justify-end" >
                            <UpdateButton onClick={doNothing}/>
                        </div>
                        <InfoUser label="Nome" value="Usuário" />
                        <InfoUser label="Data de nascimento" value="25/07/2000" />
                        <InfoUser label="CPF" value="12345678910" />
                        <InfoUser label="Telefone" value="11946415527" />
                    </div>
                </section>
                
                <section className="ml-20 mr-20">
                    <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md">
                        <div className="flex justify-end" >
                            <UpdateButton onClick={toggleState} />
                        </div>
                        
                        <InfoUser label="Cidade" value="São Paulo"/>

                        <InfoUser label="Bairro" value="Centro" />

                        <ChangeInfoUser
                            label="CEP" 
                            value={zipCode}
                            isEditable={isEditable}
                            onChange={setZipCode}
                        />

                        <InfoUser label="Rua" value="Conselheiro Crispianiano" />

                        <ChangeInfoUser
                            label="Número" 
                            value={complement}
                            isEditable={isEditable}
                            onChange={setComplement}
                        />

                    </div>
                </section>
                <section className="ml-20 mr-20">
                    <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md">
                        <div className="flex justify-end" >
                            <UpdateButton onClick={openModal} />
                        </div>
                        <InfoUser label="E-mail" value="username@senaisp" />
                        <InfoUser label="Senha" value="******12" />
                    </div>
                </section>

            </main>

            <Footer />

            {isModalOpen && <ChangePassworModal closeChangePasswordModal={closeModal} />}            

        </div>
    )
}