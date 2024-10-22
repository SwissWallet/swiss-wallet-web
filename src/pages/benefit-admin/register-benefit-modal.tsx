import React, { useState } from "react";
import { BackButton } from "../../components/micro-components/back-button";
import { api } from "../../lib/axios";
import { MainButton } from "../../components/micro-components/main-button";
import { UserInput } from "../../components/micro-components/user-input";

interface RegisterBenefitModalProps{
    setIsOpenRegisterModal: (e: boolean) => void;
}

export function RegisterBenefitModal({
    setIsOpenRegisterModal,
}: RegisterBenefitModalProps){

    const [ title, setTitle ] = useState<string>("");
    const [ description, setDescription ] = useState<string>("");
    const [ textAlert, setTextAlert ] = useState<string>("");

    async function RegisterBenefit(){
        api.post(`/v3/benefit/actives`, {
            title, 
            description
        })
        .then(() => () => setIsOpenRegisterModal(false))
        .catch((err) => console.log(err))
    };

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        if(!title || !description) {
            setTextAlert("Os campos devem ser preenchidos!")    
            return
        }
        RegisterBenefit();
    };

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
                <BackButton type="button" onClick={() => setIsOpenRegisterModal(false)}/>

                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-medium">Cadastre novo beneficio</h1>
                    <p className="font-medium text-sm text-zinc-600 ml-4">Todos os campos são obrigatórios</p>
                </div>

                <div className="flex items-center w-full">
                    <p className="text-red-700 text-center w-full font-medium text-xl">{textAlert}</p>
                </div>

                <UserInput 
                    onChange={(e) => setTitle(e.target.value)}
                    position="center" 
                    placeholder="ex: Vale Transporte"
                >
                    Título
                </UserInput>
                <div className="w-full text-center gap-3 flex flex-col">
                    <p className="text-lg font-medium">Descrição</p>
                    <textarea 
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Ex: Este benefício auxilia alunos com seu transporte à unidade de estudo"
                        className="w-full outline-none rounded-md p-2 border-2 border-zinc-300  font-medium placeholder-slate-400
                        focus:not-italic focus:border-red-600 placeholder:font-light placeholder:italic"
                    />
                </div>
                <div className="flex gap-10 justify-center items-center">
                    <MainButton
                        type="submit"
                        width="min"
                    >Cadastrar
                    </MainButton>
                </div>

            </form>
        </div>
    )
};