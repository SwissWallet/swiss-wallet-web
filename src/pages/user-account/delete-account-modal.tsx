import React, { useState } from "react";
import { BackButton } from "../../components/micro-components/back-button";
import { UserInput } from "../../components/micro-components/user-input";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { api } from "../../lib/axios";
import { MainButton } from "../../components/micro-components/main-button";

interface DeleteAccountModalProps{
    closeDeleteAccountModal: () => void,
}

export function DeleteAccountModal({
    closeDeleteAccountModal,
}:DeleteAccountModalProps){

    const user = useSelector((state: RootState) => state.authUser.value);
    const username = user.user.username;

    const [ usernameEnter, setUsernameEnter ] = useState("");
    const [ textAlert, setTextAlert ] = useState("");

    async function deleteAccount(){
        const token = localStorage.getItem('token')

        await api.delete(`/v3/users`, {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then((json) => {
            console.log(json.status)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handdleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!usernameEnter.endsWith('.com') || !usernameEnter.includes('@')){    
            setTextAlert("E-mail inválido")
            return
        }

        if(usernameEnter !== username){
            setTextAlert("E-mail incorreto")
            return
        }

        deleteAccount();
        closeDeleteAccountModal();
    }

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <form onSubmit={handdleSubmit} className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
                <BackButton type="button" onClick={closeDeleteAccountModal}/>
                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-medium">Delete sua conta</h1>
                    <p className="font-medium text-sm text-zinc-600 ml-4">Todos os campos são obrigatórios</p>
                </div>
                <div className="flex items-center w-full">
                    <p className="text-red-700 text-center w-full font-medium text-xl">{textAlert}</p>
                </div>
                <div>
                    <p className="text-center text-red-600 font-medium">digite seu e-mail para confirmar</p>
                    <UserInput onChange={(e) => setUsernameEnter(e.target.value)}>E-mail</UserInput>
                </div>
                <div className="flex justify-center">
                    <MainButton type="submit" width="min">Excluir</MainButton>
                </div>
            </form>
        </div>
    )
}