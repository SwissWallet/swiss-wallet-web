import { useState } from "react";
import { HeaderLoginAndRegister } from "../../components/header-login-and-register";
import { UsernameModal } from "./username-modal";


export function LoginPage(){

    

    return(
        <div className="h-screen w-full bg-red-gradient">
            <HeaderLoginAndRegister />

            <main className="flex justify-center">
                <UsernameModal />
            </main>
            
        </div>


        
    )
}