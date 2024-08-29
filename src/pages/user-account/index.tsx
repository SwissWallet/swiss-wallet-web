import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { UpdateButton } from "../../components/micro-components/update-button";
import { setUser } from "../../features/user-slice";
import { api } from "../../lib/axios";
import { RootState } from "../../store";
import { ChangePassworModal } from "./changepassword-modal";
import { InfoUser } from "./line-info-user";
import { ChangeAddressModal } from "./change-address-modal";

export function UserAccount() {

    const [ isModalPasswordOpen, setIsModalPasswordOpen ] = useState(false);
    const [ isModalAddressOpen, setIsModalAddressOpen ] = useState(false);

    const [ typingNumber, setTypingNumber ] = useState(false);
    
    const dispatch = useDispatch();

    const doNothing = () => {};

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
    const address = user.address
    console.log(user)
    console.log(address)

    const zipCodeReplace = address.zipCode.replace(/-/g, '');

    const [number, setNumber] = useState(address.number);
    const [localCep, setLocalCep] = useState(zipCodeReplace);

    async function changeAddress(){

        await api.put(`/v3/users/address`, {
            zipCode: address.zipCode,
            street: address.street,
            city: address.city,
            number: address.number,
            uf: address.uf,
        })
        .then((json) => {
            if(json.status === 200){
                console.log("endereço alterado com sucesso");
            }
        })
        .catch((err) => {
            if(err.response.status === 403){
                console.log("endereço inválido");
            }
        })
    }

    const [ zipCode, setZipCode ] = useState(address.zipCode);
    const [ street, setStreet ] = useState(address.street);
    const [ city, setCity ] = useState(address.city);
    const [ uf, setUf ] = useState(address.uf);

    function getAddress(){
        if(localCep.length === 8){
            axios.get(
                `https://viacep.com.br/ws/${localCep}/json/`
            )
            .then((json) => {
                setZipCode(json.data.cep);
                setStreet(json.data.street);
                setCity(json.data.city);
                setUf(json.data.uf);

                if(typingNumber){
                    changeAddress()
                    
                }
                else{
                    console.log("Confira o número do endereço")
                    
                }

                

            })
            
        }
    }

    //capturando dados extras através de cep do usuário
    useEffect(() => {
        getAddress();
    }, [localCep]);

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

        setTypingNumber(true);
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
                            <UpdateButton onClick={openChangeAddressModal} />
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