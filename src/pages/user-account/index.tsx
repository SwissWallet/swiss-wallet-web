import { useState } from "react";
import { useSelector } from "react-redux";
import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { UpdateButton } from "../../components/micro-components/update-button";
import { RootState } from "../../store";
import { ChangeAddressModal } from "./change-address-modal";
import { ChangePassworModal } from "./changepassword-modal";
import { InfoUser } from "./line-info-user";
import { MainButton } from "../../components/micro-components/main-button";
import { DeleteAccountModal } from "./delete-account-modal";

export function UserAccount() {

    const [isModalPasswordOpen, setIsModalPasswordOpen] = useState(false);
    const [isModalAddressOpen, setIsModalAddressOpen] = useState(false);
    const [isModalDeleteAccountOpen, setIsModalDeleteAccountOpen] = useState(false);

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

    const openDeleteAccountModal = () => {
        setIsModalDeleteAccountOpen(true);
    }

    const closeDeleteAccountModal = () => {
        setIsModalDeleteAccountOpen(false);
    }

    const user = useSelector((state: RootState) => state.authUser.value);
    const address = user.address;

    return (
        <div className="bg-default-gray">
            <Navbar />
            <main className="px-5 md:px-10 lg:px-20 flex flex-col gap-8 mt-10 mb-10">
                
                <div className="text-center md:text-left">
                    <h1 className="font-bold text-2xl md:text-4xl">Dados pessoais</h1>
                    <p className="italic font-medium text-base md:text-lg">Informações do usuário</p>
                </div>

                <section className="w-full flex flex-col items-center">
                    <div className="flex flex-col w-full max-w-2xl bg-white p-5 drop-shadow-custom rounded-md">
                        <div className="flex justify-end mb-4">
                            <UpdateButton onClick={openChangeAddressModal} />
                        </div>
                        <InfoUser label="CEP" value={address.zipCode} />
                        <InfoUser label="Cidade" value={address.city} />
                        <InfoUser label="Rua" value={address.street} />
                        <InfoUser label="UF" value={address.uf} />
                        <InfoUser label="Número" value={String(address.number)} />
                    </div>
                </section>

                <section className="w-full flex flex-col items-center">
                    <div className="flex flex-col w-full max-w-2xl bg-white p-5 drop-shadow-custom rounded-md">
                        <InfoUser label="Nome" value={user.user.name} />
                        <InfoUser label="Data de nascimento" value={user.user.birthDate} />
                        <InfoUser label="CPF" value={user.user.cpf} />
                        <InfoUser label="Telefone" value={user.user.phone} />
                    </div>
                </section>

                

                <section className="w-full flex flex-col items-center">
                    <div className="flex flex-col w-full max-w-2xl bg-white p-5 drop-shadow-custom rounded-md">
                        <div className="flex justify-end mb-4">
                            <UpdateButton onClick={openChangePasswordModal} />
                        </div>
                        <InfoUser label="E-mail" value={user.user.username} />
                        <InfoUser label="Senha" value="******" />
                    </div>
                </section>

                <section className="w-full flex justify-center">
                    <MainButton onClick={openDeleteAccountModal} className="w-full max-w-xs">Excluir Conta</MainButton>
                </section>
            </main>

            <Footer />

            {isModalPasswordOpen && <ChangePassworModal closeChangePasswordModal={closeChangePasswordModal} />}
            {isModalAddressOpen && <ChangeAddressModal closeChangeAddressModal={closeChangeAddressModal} />}
            {isModalDeleteAccountOpen && <DeleteAccountModal closeDeleteAccountModal={closeDeleteAccountModal} />}
        </div>
    )
}