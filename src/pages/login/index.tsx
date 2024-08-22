import { useState } from "react";
import { HeaderLoginAndRegister } from "../../components/macro-components/header-login-and-register";
import { UsernameModal } from "./username-modal";
import { UserPasswordModal } from "./userpassword-modal";
import { FooterLoginAndRegister } from "../../components/macro-components/footer-login-and-register";
import { ForgotPassword } from "./forgot-password-modal";

export function Login() {

    const [filledUserName, setFilledUserName] = useState(false);
    const [isVisibleForgotPassword, setIsVisibleForgotPassword] = useState(false);

    function openForgotPassword() {
        setIsVisibleForgotPassword(true)
    }

    function closeForgotPassword() {
        setIsVisibleForgotPassword(false)
    }

    function handdleAdvanceUserInput() {
        setFilledUserName(true);
    }

    function handdleBackUserInput() {
        setFilledUserName(false);
    }


    return (
        <div className="h-screen w-full bg-red-gradient flex flex-col justify-between">
            <HeaderLoginAndRegister />

            <main className="flex justify-center mb-14">

                {
                    filledUserName ? (

                        isVisibleForgotPassword ? (

                            <ForgotPassword
                                closeForgotPassword={closeForgotPassword}
                            />

                        ) : (

                            <UserPasswordModal
                                handdleBackUserInput={handdleBackUserInput}
                                openForgotPassword={openForgotPassword}
                            />
                        )


                    ) : (
                        <UsernameModal
                            handdleAdvanceUserInput={handdleAdvanceUserInput}
                        />
                    )
                }


            </main>

            <FooterLoginAndRegister />

        </div>


    )
}