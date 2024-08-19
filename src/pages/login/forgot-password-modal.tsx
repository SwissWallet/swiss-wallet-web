import { MainButton } from "../../components/micro-components/main-button";
import { UserInput } from "../../components/micro-components/user-input";

interface ForgotPasswordProps{
    closeForgotPassword: () => void,
}

export function ForgotPassword({
    closeForgotPassword,
}:ForgotPasswordProps){

    const handdleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        closeForgotPassword();
    }

    return(
        <form onSubmit={handdleSubmit} className="bg-white rounded-lg w-[600px] h-auto p-8 flex gap-8 flex-col">
            <p className="font-medium text-center text-base italic text-zinc-500">Um e-mail será enviado para <span>usernameusuario@senaisp</span>, 
            prosseguindo com os seguintes procedimentos para a recuperação de senha.</p>

            <div className="flex justify-center">
                <div className="flex flex-col justify-center gap-6 w-96 ">
                    <UserInput position="center" >
                        Nova senha
                    </UserInput>
                    <UserInput position="center" >
                        Código de validação
                    </UserInput>
                </div>
            </div>


            <div className="flex justify-between items-center">
                <button type="button" className="font-medium text-zinc-500 hover:text-zinc-600 hover:cursor-pointer">
                    Não recebi e-mail
                </button>

                <MainButton type="submit">
                     OK
                </MainButton>
            </div>
        </form>
    )
}