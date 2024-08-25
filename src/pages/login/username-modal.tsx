import { Link } from "react-router-dom"
import { MainButton } from "../../components/micro-components/main-button"
import { UserInput } from "../../components/micro-components/user-input"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store"
import { setUserLogin } from "../../features/login-slice"

interface UsernameModalProps {
    handdleAdvanceUserInput: () => void,
}

export function UsernameModal({
    handdleAdvanceUserInput,
}: UsernameModalProps) {

    const dispatch = useDispatch<AppDispatch>()

    const handdleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        handdleAdvanceUserInput()
    }

    const handdleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        dispatch(setUserLogin({username: value}))
    }

    return(
                <form onSubmit={handdleSubmit} className="bg-white rounded-lg w-[600px] h-auto p-8 flex gap-8 flex-col">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl font-medium">Login</h1>
                        <p className="font-medium text-sm text-zinc-800 ml-4">Bem-vindo(a) ao portal SwissWallet.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-center flex-col  gap-1">
                            
                            <UserInput placeholder="Insira seu e-mail" onChange={handdleChangeUsername}>
                                Usuário
                            </UserInput>
                            <div className="flex items-center justify-center">
                                <Link to={'/register'}>
                                    <span className="text-sm font-medium text-zinc-500
                                            hover:text-zinc-600 hover:cursor-pointer">
                                não tenho conta
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <MainButton type="submit" >
                    Avançar
                </MainButton>
            </div>
        </form>
    )
}