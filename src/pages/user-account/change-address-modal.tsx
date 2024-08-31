import { BackButton } from "../../components/micro-components/back-button";
import { UserInput } from "../../components/micro-components/user-input";
import { MainButton } from "../../components/micro-components/main-button";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { api } from "../../lib/axios";
import { setUser } from "../../features/user-slice";

interface ChangeAddressModalProps{
    closeChangeAddressModal: () => void,
}

export function ChangeAddressModal({
    closeChangeAddressModal,
}:ChangeAddressModalProps){
    const dispatch = useDispatch();
    const user = useSelector((state:RootState) => state.authUser.value);

    const [ zipCode, setZipCode ] = useState(user.address.zipCode);
    const [ street, setStreet ] = useState(user.address.street);
    const [ city, setCity ] = useState(user.address.city);
    const [ uf, setUf ] = useState(user.address.uf);
    const [ number, setNumber ] = useState(user.address.number)

    async function changeAddress() {
        await api.put(`/v3/users/address`, {
            zipCode, street, city, number, uf
        })
        .then((json) => {
            if(json.status === 200){
                console.log("endereço alterado com sucesso")
                reload();
            }
        })
        .catch((err) => {
            if(err.response.status === 403){
                console.log("endereço inválido")
            }
        })
    }

    async function reload() {
        await api.get('/v3/users/current')
        .then ((json) => {
            dispatch(setUser(json.data))
        })
    }

    const handdleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(zipCode === "" || street === "" || city === "" || number === null || uf === ""){
            console.log("preencha todos os campos")
            return
        }

        changeAddress();
        closeChangeAddressModal();
    }


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <form onSubmit={handdleSubmit} className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
                <BackButton type="button" onClick={closeChangeAddressModal} />

                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-medium">Altere seu endereço</h1>
                    <p className="font-medium text-sm text-zinc-600 ml-4">Todos os campos são obrigatórios</p>
                </div>
                <div className="flex flex-col gap-6">
                    <UserInput 
                        placeholder="ex: 11560130" 
                        value={zipCode}
                        type="text"
                        maxLength={8} minLength={8} required
                        onChange={(e) => setZipCode(e.target.value)}
                    >CEP</UserInput>

                    <div className="flex items-center gap-5 ">
                        <UserInput 
                            placeholder="ex: São Paulo" 
                            type="text" 
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        >Cidade</UserInput>

                        <div className='flex flex-col gap-3'>
                            <h2 className='font-medium text-base'>UF</h2>
                                <input 
                                    type="text"
                                    placeholder="ex: SP"
                                    value={uf}
                                    minLength={2} maxLength={2} required
                                    onChange={(e) => setUf(e.target.value)}
                                    className='outline-none rounded-md p-2 border-2 border-zinc-300  font-medium placeholder-slate-400
                                                focus:not-italic focus:border-red-600 placeholder:font-light placeholder:italic'
                                />
                        </div>
                    </div>

                    <UserInput 
                        placeholder="ex: Conselheiro Crispiniano" 
                        value={street} 
                        type="text"
                        onChange={(e) => setStreet(e.target.value)}
                    >Rua</UserInput>

                    <UserInput 
                        placeholder="ex: 22" 
                        type="number"
                        value={number}
                        minLength={1} required
                        onChange={(e) => setNumber(Number(e.target.value))}
                    >Número</UserInput>

                </div>
                <div className="flex justify-center items-center">
                    <MainButton type="submit">
                        Alterar
                    </MainButton>
                </div>

            </form>
        </div>
    )
}