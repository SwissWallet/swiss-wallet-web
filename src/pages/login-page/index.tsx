import { useState } from "react";
import { HeaderLoginAndRegister } from "../../components/header-login-and-register";
import { UsernameModal } from "./username-modal";
import { UserPasswordModal } from "./userpassword-modal";


export function LoginPage(){

    const [ filledUserName, setFilledUserName ] = useState(false)

    function handdleAdvanceUserInput(){
        setFilledUserName(true);
    }

    function handdleBackUserInput(){
        setFilledUserName(false);
    }

    return(
        <div className="h-screen w-full bg-red-gradient">
            <HeaderLoginAndRegister />

            <main className="flex justify-center">

                {
                    filledUserName ? (
                        <UserPasswordModal 
                            handdleBackUserInput={handdleBackUserInput}
                        />
                    ) : (
                        <UsernameModal 
                            handdleAdvanceUserInput={handdleAdvanceUserInput}
                        />
                    )
                }
            </main>
            
        </div>


        
    )
}