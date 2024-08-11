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
        <div className="h-screen w-full bg-red-gradient flex flex-col justify-between">
            <HeaderLoginAndRegister />

            <main className="flex justify-center mb-14">

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

            <footer className="bg-transparent flex justify-center items-center h-auto w-full">
                <p className="text-white font-medium">© SwissWallet - 2024</p>
            </footer>
            
        </div>


        
    )
}