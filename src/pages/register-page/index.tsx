import { useState } from "react";
import { FooterLoginAndRegister } from "../../components/macro-components/footer-login-and-register";
import { HeaderLoginAndRegister } from "../../components/macro-components/header-login-and-register";
import { RegisterPrimaryStep } from "./register-primary-step-modal";
import { RegisterSecondaryStep } from "./register-secondary-step-modal";
import { RegisterThirdStep } from "./register-third-step-modal";

export function RegisterPage(){

    const [ filledPrimaryStep, setFilledPrimaryStep ] = useState(false)
    const [ filledSecondaryStep, setFilledSecondaryStep ] = useState(false)
    const [ filledThirdStep, setFilledThirdStep ] = useState(false)

    function finishedPrimaryStep(){
        setFilledPrimaryStep(true)
    }

    function finishedSecondaryStep(){
        setFilledSecondaryStep(true)
    }

    function finishedThirdStep(){
        setFilledThirdStep(true)
    }

    return(
        <div className="bg-red-gradient h-auto w-full flex gap-28 flex-col">

            <HeaderLoginAndRegister />

            <main className="flex justify-center">

                {
                    !filledPrimaryStep && (
                        <RegisterPrimaryStep />
                    )

                }

                {
                    filledPrimaryStep && (
                        <RegisterSecondaryStep />
                    )
                }

                {
                    filledSecondaryStep && (
                        <RegisterThirdStep />
                    )
                }

            </main>

            <FooterLoginAndRegister />
        </div>
    )
}