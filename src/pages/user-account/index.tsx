import { useState } from "react";
import { useSelector } from "react-redux";
import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { UpdateButton } from "../../components/micro-components/update-button";
import { RootState } from "../../store";
import { ChangePassworModal } from "./changepassword-modal";
import { InfoUser } from "./line-info-user";
import { ChangeAddressModal } from "./change-address-modal";
import { api } from "../../lib/axios";

export function UserAccount() {

    const [ isModalPasswordOpen, setIsModalPasswordOpen ] = useState(false);
    const [ isModalAddressOpen, setIsModalAddressOpen ] = useState(false);

    const openChangePasswordModal = () => {
        setIsModalPasswordOpen(true);
    }
    
    const closeChangePasswordModal = () => {
        setIsModalPasswordOpen(false);
    }

    const openChangeAddressModal = () => {
        setIsModalAddressOpen(true);
    }

    const closeChangeAddressModal = () => {

        setIsModalAddressOpen(false);
    }
    
    const user = useSelector((state:RootState) => state.authUser.value);
    const address = user.address;

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
                        <InfoUser label="Nome" value={user.user.name} />
                        <InfoUser label="Data de nascimento" value={user.user.birthDate} />
                        <InfoUser label="CPF" value={user.user.cpf} />
                        <InfoUser label="Telefone" value={user.user.phone} />
                    </div>
                </section>
                
                <section className="ml-20 mr-20">
                    <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md">
                        <div className="flex justify-end" >
                            <UpdateButton onClick={openChangeAddressModal} />
                        </div>
                        
                        <InfoUser label="CEP" value={address.zipCode} />
                        <InfoUser label="Cidade" value={address.city}/>
                        <InfoUser label="Rua" value={address.street} />
                        <InfoUser label="UF" value={address.uf} />
                        <InfoUser label="Number" value={'' + address.number} />
                        

                    </div>
                </section>
                <section className="ml-20 mr-20">
                    <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md">
                        <div className="flex justify-end" >
                            <UpdateButton onClick={openChangePasswordModal} />
                        </div>
                        <InfoUser label="E-mail" value={user.user.username} />
                        <InfoUser label="Senha" value="******" />
                    </div>
                </section>

            </main>

            <Footer />

            {isModalPasswordOpen && <ChangePassworModal closeChangePasswordModal={closeChangePasswordModal} />}
            {isModalAddressOpen && <ChangeAddressModal closeChangeAddressModal={closeChangeAddressModal} />}       

        </div>
    )
}