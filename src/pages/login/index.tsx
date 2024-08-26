import { useState } from "react";
import { HeaderLoginAndRegister } from "../../components/macro-components/header-login-and-register";
import { UsernameModal } from "./username-modal";
import { UserPasswordModal } from "./userpassword-modal";
import { FooterLoginAndRegister } from "../../components/macro-components/footer-login-and-register";
import { ForgotPassword } from "./forgot-password-modal";
import { useDispatch } from "react-redux";
import { resetUserLogin } from "../../features/user-login-slice";

export function Login() {

    const [filledUserName, setFilledUserName] = useState(false);
    const [isVisibleForgotPassword, setIsVisibleForgotPassword] = useState(false);

    const [ textAlert, setTextAlert ] = useState('');

    const dispatch = useDispatch();

    function openForgotPassword() {
        setIsVisibleForgotPassword(true)
    }

    function closeForgotPassword() {
        setIsVisibleForgotPassword(false)
    }

    function handdleAdvanceUserInput() {
        setTextAlert("")
        setFilledUserName(true);
    }

    function handdleBackUserInput() {
        setTextAlert("")
        dispatch(resetUserLogin())
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
                                setTextAlert={setTextAlert}
                                textAlert={textAlert}
                            />

                        ) : (

                            <UserPasswordModal
                                handdleBackUserInput={handdleBackUserInput}
                                openForgotPassword={openForgotPassword}
                                setTextAlert={setTextAlert}
                                textAlert={textAlert}
                            />
                        )


                    ) : (
                        <UsernameModal
                            handdleAdvanceUserInput={handdleAdvanceUserInput}
                            textAlert={textAlert}
                            setTextAlert={setTextAlert}
                        />
                    )
                }


            </main>

            <FooterLoginAndRegister />

        </div>


    )
}