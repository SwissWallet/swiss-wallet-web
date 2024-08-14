import { MainButton } from "../../components/micro-components/main-button";

interface ForgotPasswordProps{
    closeForgotPassword: () => void,
}

export function ForgotPassword({
    closeForgotPassword,
}:ForgotPasswordProps){
    return(
        <form className="bg-white rounded-lg w-[600px] h-auto p-8 flex gap-8 flex-col">
            <p className="font-medium text-center text-xl">Um e-mail será enviado para <span>usernameusuario@senaisp</span>, 
            prosseguindo com os seguintes procedimentos para a recuperação de senha.</p>
            <div className="flex justify-between items-center">
                <button className="font-medium text-zinc-500 hover:text-zinc-600 hover:cursor-pointer">
                    Não recebi e-mail
                </button>

                <MainButton onClick={closeForgotPassword}>
                     OK
                </MainButton>
            </div>
        </form>
    )
}