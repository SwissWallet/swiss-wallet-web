import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/micro-components/back-button";
import { MainButton } from "../../components/micro-components/main-button";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user-slice";
import { api } from "../../lib/axios";
import { useState } from "react";
import { UserInput } from "../../components/micro-components/user-input";
import { Eye, EyeOff } from "lucide-react";
import { setLogin } from "../../features/login-slice";
interface UserPasswordModalProps {
    handdleBackUserInput: () => void,
    setTextAlert: (e: string) => void,
    openForgotPassword: () => void,
    setPassword:(e: string) => void,
    username: string,
    password: string,
    textAlert: string,
}

export function UserPasswordModal({
    handdleBackUserInput,
    openForgotPassword,
    setTextAlert,
    setPassword,
    username,
    password,
    textAlert,
}: UserPasswordModalProps) {

    const [ isVisiblePassword, setIsVisiblePassword ] = useState(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function logIn(){
        const token = localStorage.getItem('token');

        await api.get(`/v3/users/current`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(async(json) => {
            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            dispatch(setUser(json.data));
            dispatch(setLogin(true));

            navigate('/home')
        })
        .catch(async(err) => {
            await localStorage.clear;
            console.log(err)
        })
    }

    async function authLogin() {
        
        await api.post(`/v3/auth`, {
            username, password
        })
        .then(async(json) => {
            try{
                await localStorage.setItem('token', json.data.token);

                logIn();

            }catch (error){
                console.log(error)
            }
        })
        .catch((err) => {
            console.log(err.response.status);
            if(err.response.status === 400){
                setTextAlert("*Credenciais inválidas*");
            }
            else if(err.response.status === 422){
                setTextAlert("*Ocorreu um problema*")
            }
        })
    };

    const handdleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(password === ''){
            setTextAlert("*Insira sua senha*")
            return
        }

        authLogin();
    }

    return(
            <form onSubmit={handdleSubmit} className="bg-white rounded-lg w-[600px] h-auto p-8 flex gap-8 flex-col">

            <BackButton
                type="button" onClick={handdleBackUserInput}
            />

                    <div className="flex flex-col gap-3">
                        <h3 className="text-3xl font-medium">Digite sua senha</h3>
                        <p className="font-medium text-sm text-zinc-800 ml-4">{username}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        
                    <div className="flex items-center w-full relative h-auto">
                        <p className="absolute  text-red-700 text-center w-full font-medium text-lg">
                            {textAlert}
                        </p>
                    </div>
                            <UserInput
                                type={isVisiblePassword ? 'text' : 'password'}
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="Insira sua senha"
                                isVisibleSvgIcon={true}
                                svgIcon={isVisiblePassword ? (
                                    <button className="flex items-center" type="button" onClick={() => setIsVisiblePassword(false)}>
                                        <Eye />
                                    </button>
                                ) : (
                                    <button className="flex items-center" type="button" onClick={() => setIsVisiblePassword(true)}>
                                        <EyeOff />
                                    </button>
                        )}
                            />
                        <div className="flex justify-center flex-col items-center gap-1">
                            <button type="button" onClick={openForgotPassword}>
                                <span className="text-sm font-medium text-zinc-500
                                        hover:text-zinc-600 hover:cursor-pointer">
                                    esqueceu sua senha?
                                </span>
                            </button>
                        </div>
            </div>
            <div className="flex justify-center items-center">   
                <MainButton type="submit">
                    Avançar
                </MainButton>
            </div>
        </form>
    )
}