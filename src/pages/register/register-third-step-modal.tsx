import { BackButton } from "../../components/micro-components/back-button";
import { UserInput } from "../../components/micro-components/user-input";
import { MainButton } from "../../components/micro-components/main-button";
import { useEffect, useState } from "react";

interface RegisterThirdStepProps{
    finishedThirdStep: () => void,
    backToTheSecondaryStep: () => void,
    handdleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export function RegisterThirdStep({
    finishedThirdStep,
    backToTheSecondaryStep,
    handdleChange,
}:RegisterThirdStepProps){

    const [ newPassword, setNewPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const [ isEgual, setIsEgual ] = useState<boolean | undefined>(undefined);

    function handdleNewPasswordChange(e: React.ChangeEvent<HTMLInputElement>){
        setNewPassword(e.target.value)
    }

    function handdleConfirmPasswordChange(e: React.ChangeEvent<HTMLInputElement>){
        setConfirmPassword(e.target.value)
    }

    useEffect(() => {
        
        if(newPassword !== '' && confirmPassword !== ''){
            setIsEgual(newPassword === confirmPassword)
        }

    }, [ newPassword, confirmPassword ])


    return(
        <div className="bg-white rounded-lg w-[600px] h-auto p-8 flex gap-8 flex-col">

        <BackButton onClick={backToTheSecondaryStep} />

        <form className="flex gap-8 flex-col">


                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl font-medium">Cadastre-se</h1>
                        <p className="font-medium text-sm text-zinc-600 ml-4">Todos os campos são obrigatórios</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-default-red h-10 w-10 rounded-full"></div>
                        <div className="bg-default-red h-[2px] w-16"></div>
                        <div className="bg-default-red h-10 w-10 rounded-full"></div>
                        <div className="bg-default-red h-[2px] w-16"></div>
                        <div className="bg-default-red h-10 w-10 rounded-full"></div>
                    </div>
                    <div className="flex flex-col gap-6">

                        <UserInput onChange={handdleNewPasswordChange}  placeholder="ex: senha1234" type="password">Crie uma senha</UserInput>

                        <UserInput onChange={handdleConfirmPasswordChange} placeholder="ex: senha1234" type="password">Confirme sua senha</UserInput>
                        <div className="flex justify-center items-center">
                            {
                                isEgual !== undefined &&
                                    isEgual ? (
                                        <span className="text-transparent" >senha aprovada</span>
                                    ) : (
                                        <span className="text-red-700" >as senhas fornecidas são diferentes*</span>
                                    )
                            }
                        </div>
                        <div className="flex justify-evenly gap-5">
                            <div className="flex gap-4 items-center">
                                <input type="checkbox" className="size-4 hover:cursor-pointer" />
                                <span className="text-zinc-600 font-medium">Aceito termos e condições</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input type="checkbox" className="size-4 hover:cursor-pointer" />
                                <span className="text-zinc-600 font-medium">Não sou um robô</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <MainButton onClick={finishedThirdStep} >
                            Cadastrar
                        </MainButton>
                    </div>

                </form>
            </div>
    )
}