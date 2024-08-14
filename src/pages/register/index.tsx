import { useState } from "react";
import { FooterLoginAndRegister } from "../../components/macro-components/footer-login-and-register";
import { HeaderLoginAndRegister } from "../../components/macro-components/header-login-and-register";
import { RegisterPrimaryStep } from "./register-primary-step-modal";
import { RegisterSecondaryStep } from "./register-secondary-step-modal";
import { RegisterThirdStep } from "./register-third-step-modal";
import { FinishRegister } from "./finish-register";

export function Register(){

    // Estados para exibição dos passos para o cadastro do usuário
    const [ filledPrimaryStep, setFilledPrimaryStep ] = useState(true)
    const [ filledSecondaryStep, setFilledSecondaryStep ] = useState(false)
    const [ filledThirdStep, setFilledThirdStep ] = useState(false)
    const [ finishRegister, setFinishRegister ] = useState(false)

    // Funções para avançar os passos do cadastro
    function finishedPrimaryStep(){
        setFilledPrimaryStep(false)
        setFilledSecondaryStep(true)
    }

    function finishedSecondaryStep(){
        setFilledSecondaryStep(false)
        setFilledThirdStep(true)
    }

    function finishedThirdStep(){
        setFilledThirdStep(false)
        setFinishRegister(true)
    }

    // Funções para voltar os passos do cadastro
    function backToThePrimaryStep(){
        setFilledSecondaryStep(false)
        setFilledPrimaryStep(true)
    }

    function backToTheSecondaryStep(){
        setFilledThirdStep(false)
        setFilledSecondaryStep(true)
    }

    return(
        <div className="bg-red-gradient h-auto w-full flex gap-28 flex-col">

            <HeaderLoginAndRegister />

            <main className="flex justify-center">

                {
                    filledPrimaryStep && (
                        <RegisterPrimaryStep 
                            finishedPrimaryStep={finishedPrimaryStep}
                        />
                    )

                }

                {
                    filledSecondaryStep && (
                        <RegisterSecondaryStep 
                            finishedSecondaryStep={finishedSecondaryStep}
                            backToThePrimaryStep={backToThePrimaryStep}
                        />
                    )
                }


                {
                    filledThirdStep && (
                        <RegisterThirdStep 
                            finishedThirdStep={finishedThirdStep}
                            backToTheSecondaryStep={backToTheSecondaryStep}
                        />
                    )
                }

                {
                    finishRegister && (
                        <FinishRegister />
                    )
                }

            </main>

            <FooterLoginAndRegister />
        </div>
    )
}