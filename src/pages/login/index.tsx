//@ts-nocheck
import { useEffect, useState } from "react";
import { HeaderLoginAndRegister } from "../../components/macro-components/header-login-and-register";
import { UsernameModal } from "./username-modal";
import { UserPasswordModal } from "./userpassword-modal";
import { FooterLoginAndRegister } from "../../components/macro-components/footer-login-and-register";
import { ForgotPassword } from "./forgot-password-modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { api } from "../../lib/axios";
import { setLogin } from "../../features/login-slice";
import { setUser } from "../../features/user-slice";
export function Login() {

    const routeCurrent = localStorage.getItem('routeCurrent');

    const [filledUserName, setFilledUserName] = useState(false);
    const [isVisibleForgotPassword, setIsVisibleForgotPassword] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [textAlert, setTextAlert] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function loadStorage() {
        const token = localStorage.getItem('token');

        if (token) {
            await api.get(`/v3/users/current`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((json) => {
                    api.defaults.headers['Authorization'] = `Bearer ${token}`;
                    dispatch(setUser(json.data));
                    dispatch(setLogin(true));
                    navigate(`${routeCurrent}`);

                })
                .catch((err) => {
                    dispatch(setLogin(false));
                    console.log(err);
                });
        }
    }

    useEffect(() => {
        loadStorage();
    }, []);

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
                                username={username}
                            />
                        ) : (
                            <UserPasswordModal
                                handdleBackUserInput={handdleBackUserInput}
                                openForgotPassword={openForgotPassword}
                                setTextAlert={setTextAlert}
                                textAlert={textAlert}
                                username={username}
                                setPassword={setPassword}
                                password={password}
                            />
                        )
                    ) : (
                        <UsernameModal
                            handdleAdvanceUserInput={handdleAdvanceUserInput}
                            setTextAlert={setTextAlert}
                            setUsername={setUsername}
                            textAlert={textAlert}
                            username={username}
                        />
                    )
                }
            </main>
            <FooterLoginAndRegister />
        </div>
    )
}