import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
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
    
    const user = useSelector((state:RootState) => state.authUser.value);
    const address = user.address

    const zipCodeReplace = address.zipCode.replace(/-/g, '');

    const [number, setNumber] = useState(address.number);
    const [localCep, setLocalCep] = useState(zipCodeReplace);

    //capturando dados extras através de cep do usuário
    useEffect(() => {
        if(localCep.length === 8){
            axios.get(
                `https://viacep.com.br/ws/${localCep}/json/`
            )
            .then((json) => {
                const updatedAddress = {
                    ...address,
                    zipCode: json.data.cep,
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
    }, [localCep, user, address, dispatch]);

    const handdleSetNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const newNumber = Number(value)
        setNumber(newNumber)
        dispatch(setUser({
            ...user,
            address: {
                ...address,
                number: newNumber
            }
        }))
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
                        <InfoUser label="Nome" value={user.user.name} />
                        <InfoUser label="Data de nascimento" value={user.user.birthDate} />
                        <InfoUser label="CPF" value={user.user.cpf} />
                        <InfoUser label="Telefone" value={user.user.phone} />
                    </div>
                </section>
                
                <section className="ml-20 mr-20">
                    <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md">
                        <div className="flex justify-end" >
                            <UpdateButton onClick={toggleState} />
                        </div>
                        
                        <InfoUser label="Cidade" value={address.city}/>

                        {/* <InfoUser label="Bairro" value={user.value.address.} />  //InfoUser referente ao bairro*/}

                        <div className="flex flex-col p-5 gap-4 h-auto">
                            <div className="flex items-center justify-between">
                                <div className="w-auto">
                                    <h3 className="flex flex-1 text-nowrap text-xl font-medium w-auto">CEP:</h3>
                                </div>
                                <div className=" flex-1 flex justify-center">
                                    <input className="focus:outline-none text-center text-2xl mr-11 font-semibold w-full p-2 border-none bg-transparent rounded-md" 
                                        type="text"
                                        value={localCep}
                                        disabled={!isEditable}
                                        onChange={(e) => setLocalCep(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full h-[1px] bg-slate-400 " />
                        </div>

                        <InfoUser label="Rua" value={address.street} />
                        
                        <div className="flex flex-col p-5 gap-4">
                            <div className="flex items-center justify-between">
                                <div className="w-auto">
                                    <h3 className="flex flex-1 text-nowrap text-xl font-medium w-auto">Número</h3>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <input className="focus:outline-none text-center text-2xl font-semibold w-auto mr-20 p-2 border-none bg-transparent rounded-md" 
                                        type="number"
                                        value={number}
                                        disabled={!isEditable}
                                        onChange={handdleSetNumber}
                                    />
                                </div>
                            </div>
                            <div className="w-full h-[1px] bg-slate-400 " />
                        </div>

                    </div>
                </section>
                <section className="ml-20 mr-20">
                    <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md">
                        <div className="flex justify-end" >
                            <UpdateButton onClick={openModal} />
                        </div>
                        <InfoUser label="E-mail" value={user.user.username} />
                        <InfoUser label="Senha" value="******" />
                    </div>
                </section>

            </main>

            <Footer />

            {isModalOpen && <ChangePassworModal closeChangePasswordModal={closeModal} />}            

        </div>
    )
}