import { Eye, EyeOff } from "lucide-react";
import { MainButton } from "../../components/micro-components/main-button";
import { UserInput } from "../../components/micro-components/user-input";
import { useEffect, useState } from "react";
import axios from "axios";

interface ForgotPasswordProps{
    closeForgotPassword: () => void,
}

export function ForgotPassword({
    closeForgotPassword,
}:ForgotPasswordProps){

    const [ isVisibleNewPassword, setIsVisibleNewPassword ] = useState(false)

    function handdleVisibleNewPassword(){
        setIsVisibleNewPassword(!isVisibleNewPassword)
    }

    const handdleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        closeForgotPassword();
    }

    useEffect(() => {
        const sendEmail = async () => {
            try {
                await axios.post('https://sendmail-api-hggx.onrender.com/send/text', {
                    to: "lucas.alves3318@gmail.com",
                    subject: "Assunto do email",
                    text: "Envio de texto simples"
                });
                console.log('Email enviado com sucesso!');
            } catch (error) {
                console.error('Erro ao enviar o email:', error);
            }
        };
    
        sendEmail();
    }, []);

    return(
        <form onSubmit={handdleSubmit} className="bg-white rounded-lg w-[600px] h-auto p-8 flex gap-8 flex-col">
            <p className="font-medium text-center text-base italic text-zinc-500">
                Um e-mail será enviado para <span>usernameusuario@senaisp</span>, 
                prosseguindo com os seguintes procedimentos para a recuperação de senha.</p>

            <div className="flex justify-center">
                <div className="flex flex-col justify-center gap-6 w-96 ">
                    <UserInput 
                        position="center" 
                        type={ isVisibleNewPassword ? 'text' : 'password'}
                        isVisibleSvgIcon={true}
                        svgIcon={
                            isVisibleNewPassword ? (
                                <button onClick={handdleVisibleNewPassword} type="button" className="flex items-center">
                                    <Eye />
                                </button>
                            ) : (
                                <button onClick={handdleVisibleNewPassword} type="button" className="flex items-center">
                                    <EyeOff />
                                </button>
                            )
                        }
                    >
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