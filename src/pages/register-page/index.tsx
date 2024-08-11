import { useState } from "react";
import { FooterLoginAndRegister } from "../../components/macro-components/footer-login-and-register";
import { HeaderLoginAndRegister } from "../../components/macro-components/header-login-and-register";

export function RegisterPage(){

   

    return(
        <div className="bg-red-gradient h-auto w-full flex gap-28 flex-col">

            <HeaderLoginAndRegister />

            <main className="flex justify-center">

                

            </main>

            <FooterLoginAndRegister />
        </div>
    )
}