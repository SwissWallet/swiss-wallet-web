import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { ChangeInfoUser } from "./line-change-info-user";
import { InfoUser } from "./line-info-user";
import { UpdateButton } from "../../components/micro-components/update-button";
import { ChangePassworModal } from "./changepassword-modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setUser } from "../../features/user-slice";



export function UserAccount() {

    const [isEditable, setIsEditable] = useState(false);
    const [zipCode, setZipCode] = useState('11590-130');
    const [complement, setComplement] = useState('Apto 202, Bloco B');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();

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

    const user = useSelector((state:RootState) => state.authUser);
    const address = user.value.address

    //capturando dados extras através de cep do usuário
    useEffect(() => {
        if(zipCode.length === 8){
            axios.get(
                `https://viacep.com.br/ws/${zipCode}/json/`
            )
            .then((json) => {
                const updatedAddress = {
                    ...address,
                    street: json.data.logradouro,
                    city: json.data.localidade,
                    uf: json.data.uf,
                };

                dispatch(setUser({
                    ...user,
                    address: updatedAddress
                }))
            })
        }
    }, [zipCode, user, address, dispatch]);



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
                        <InfoUser label="Nome" value={user.value.user.name} />
                        <InfoUser label="Data de nascimento" value={user.value.user.birthDate} />
                        <InfoUser label="CPF" value={user.value.user.cpf} />
                        <InfoUser label="Telefone" value={user.value.user.phone} />
                    </div>
                </section>
                
                <section className="ml-20 mr-20">
                    <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md">
                        <div className="flex justify-end" >
                            <UpdateButton onClick={toggleState} />
                        </div>
                        
                        <InfoUser label="Cidade" value={user.value.address.city}/>

                        {/* <InfoUser label="Bairro" value={user.value.address.} />  //InfoUser referente ao bairro*/}

                        <ChangeInfoUser
                            label="CEP" 
                            value={zipCode}
                            isEditable={isEditable}
                            onChange={setZipCode}
                        />

                        <InfoUser label="Rua" value={address.street} />

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