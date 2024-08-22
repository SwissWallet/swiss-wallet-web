import { Link } from "react-router-dom";
import { BackButton } from "../../components/micro-components/back-button";
import { MainButton } from "../../components/micro-components/main-button";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogin } from "../../features/user-login-slice";
import { setAuthUser } from "../../features/get-auth-user-slice";
import { RootState } from "../../store";
import { api } from "../../lib/axios";

interface UserPasswordModalProps {
    handdleBackUserInput: () => void,
    openForgotPassword: () => void,
}

export function UserPasswordModal({
    handdleBackUserInput,
    openForgotPassword,
}: UserPasswordModalProps) {

    const dispatch = useDispatch()

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        dispatch(setUserLogin({password: value}))
    }

    const { username, password } = useSelector(
        (state: RootState) => state.userLogin
    );

    const getDataAuthUser = ( email: string, name: string, birthDate: string, phone: string, 
                                address: { street: string, city: string, number: string }) => {
        dispatch(setAuthUser({
            email,
            name,
            birthDate,
            phone,
            address,
        }))
    }

    async function loadDataUser(token: string){
        await api.get(`/v3/users/current`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((json) => {
            if(json.status === 200){
                getDataAuthUser(
                    json.data.username,
                    json.data.name,
                    json.data.birthDate,
                    json.data.phone,
                    {
                        street: json.data.address.street,
                        city: json.data.address.city,
                        number: json.data.address.number,
                    }
                )
            };
        })
        .catch((err) => {
            if(err.response.status === 403){
                return window.alert('usuário não tem acesso')
            }
        })
    }

    async function authLogin() {
        console.log(username)
        console.log(password)

        await api.post('/v3/auth', {
            username,
            password,
        })
        .then((json) => {
            if(json.status === 200){
                window.alert('OK')
                console.log(json.data.token)
                loadDataUser(json.data.token)

            }
        })
        .catch((err) => {
            if(err.response.status === 400){
                return window.alert('credenciais inválidas')
            }
        })
    }

    const handdleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        authLogin()
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
                        <div className="flex justify-center flex-col items-center gap-1">
                            <input type="password" onChange={handleChangePassword} placeholder="Insira sua senha" 
                                className="outline-none rounded-md p-2 w-full border-2 border-zinc-300  font-medium placeholder-slate-400
                                    focus:not-italic focus:border-red-600 placeholder:font-light placeholder:italic" 
                            />
                            <button type="button" onClick={openForgotPassword}>
                                <span className="text-sm font-medium text-zinc-500
                                        hover:text-zinc-600 hover:cursor-pointer">
                            esqueceu sua senha?
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Link to={'/home'}>
                    <MainButton type="submit" onClick={authLogin}>
                        Avançar
                    </MainButton>
                </Link>
            </div>
        </form>
    )
}