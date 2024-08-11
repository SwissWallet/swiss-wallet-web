import { UserInput } from "../../components/micro-components/user-input"

interface UsernameModalProps{
    handdleAdvanceUserInput: () => void,
}

export function UsernameModal({
    handdleAdvanceUserInput,
}:UsernameModalProps){
    return(
                <form className="bg-white rounded-lg w-[600px] h-auto p-8 flex gap-8 flex-col">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl font-medium">Login</h1>
                        <p className="font-medium text-sm text-zinc-800 ml-4">Bem-vindo(a) ao portal SwissWallet.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-center flex-col  gap-1">
                            
                            <UserInput>
                                Usuário
                            </UserInput>
                            <div className="flex items-center justify-center">
                                <a>
                                    <span className="text-sm font-medium text-zinc-500
                                            hover:text-zinc-600 hover:cursor-pointer">
                                        não tenho conta
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={handdleAdvanceUserInput} className="bg-default-red py-2 px-20 rounded-md hover:bg-red-700">
                            <span className="font-medium text-white text-lg">Avançar</span>
                        </button>
                    </div>
                </form>
    )
}