import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { BackButton } from "../../components/micro-components/back-button";
import { MainButton } from "../../components/micro-components/main-button";
import { UserInput } from "../../components/micro-components/user-input";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setAddress } from "../../features/get-user-address-slice";

interface RegisterSecondaryStepProps {
    finishedSecondaryStep: () => void,
    backToThePrimaryStep: () => void,
}

export function RegisterSecondaryStep({
    finishedSecondaryStep,
    backToThePrimaryStep,
}: RegisterSecondaryStepProps) {

    const dispatch = useDispatch<AppDispatch>();
    const { cep, city, uf, neighborhood, street, complement } = useSelector(
        (state: RootState) => state.address
    );

    const [localCep, setLocalCep] = useState(cep);
    const [localComplement, setLocalComplement] = useState(complement);

    const handleChangeCep = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length <= 8) {
            setLocalCep(value);
            dispatch(setAddress({ cep: value }));
        }
    }

    const handleChangeComplement = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLocalComplement(value);
        dispatch(setAddress({ complement: value }));
    }

    useEffect(() => {
        if (localCep.length === 8) {
            axios.get(`https://viacep.com.br/ws/${localCep}/json/`)
                .then(response => {
                    if (response.data) {
                        dispatch(setAddress({
                            cep: response.data.cep,
                            city: response.data.localidade,
                            neighborhood: response.data.bairro,
                            uf: response.data.uf,
                            street: response.data.logradouro,
                        }));
                    }
                });
        }
    }, [localCep, dispatch]);


    const handdleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        finishedSecondaryStep();
    }

    return (

        <div className="bg-white rounded-lg w-[600px] h-auto p-8 flex gap-8 flex-col">
            <BackButton onClick={backToThePrimaryStep} />
            <form onSubmit={handdleSubmit} className="flex gap-8 flex-col">

                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-medium">Cadastre-se</h1>
                    <p className="font-medium text-sm text-zinc-600 ml-4">Todos os campos são obrigatórios</p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="bg-default-red h-10 w-10 rounded-full"></div>
                    <div className="bg-default-red h-[2px] w-16"></div>
                    <div className="bg-default-red h-10 w-10 rounded-full"></div>
                    <div className="bg-dark-gray h-[2px] w-16"></div>
                    <div className="bg-dark-gray h-10 w-10 rounded-full"></div>
                </div>
                <div className="flex flex-col gap-6">
                    <UserInput 
                        placeholder="ex: 11560130" 
                        type="number" 
                        name="cep" 
                        onChange={handleChangeCep}
                        maxLength={8} minLength={8} required
                    >CEP</UserInput>

                    <div className="flex items-center gap-5 ">
                        <UserInput placeholder="ex: São Paulo" readOnly type="text" value={city}>Cidade</UserInput>
                        <div className='flex flex-col gap-3'>
                            <h2 className='font-medium text-base'>UF</h2>
                            <div className="flex items-center justify-between border-2 border-zinc-300 w-28 h-11 rounded-md py-4 px-5 focus:outline-red-600 focus:border-white">
                                <input className='focus:outline-none'
                                    value={uf}
                                    readOnly
                                    type="text"
                                />
                                <ChevronDown className="size-28 text-zinc-500" />
                            </div>
                        </div>
                    </div>

                    <UserInput placeholder="ex: Centro" type="text" name="neighborhood" readOnly value={neighborhood}>Bairro</UserInput>
                    <UserInput placeholder="ex: Conselheiro Crispiniano" type="text" name="street" readOnly value={street} >Rua</UserInput>
                    <UserInput placeholder="ex: 22" type="number" name="complement" value={localComplement} onChange={handleChangeComplement}>Número</UserInput>

                </div>
                <div className="flex justify-center items-center">
                    <MainButton type="submit">
                        Avançar
                    </MainButton>
                </div>

            </form>
        </div>

    )
}