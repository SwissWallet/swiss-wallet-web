import { Eye, EyeOff } from "lucide-react";
import { MainButton } from "../../components/micro-components/main-button";
import { UserInput } from "../../components/micro-components/user-input";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { api } from "../../lib/axios";

interface ForgotPasswordProps{
    closeForgotPassword: () => void,
}

export function ForgotPassword({
    closeForgotPassword,
}:ForgotPasswordProps){

    const [ isVisibleNewPassword, setIsVisibleNewPassword ] = useState(false);
    const [ emailSent, setEmailSent ] = useState(false);
    const [ newPassword, setNewPassword ] = useState('')
    const [ code, setCode ] = useState('')
    const [ verificationCode, setVerificationCode ] = useState('')
    

    const { username } = useSelector(
        (state: RootState) => state.userLogin
    );

    function handdleVisibleNewPassword(){
        setIsVisibleNewPassword(!isVisibleNewPassword)
    }

    const handleChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        setNewPassword(value)
        console.log(verificationCode)
        console.log(newPassword)
        console.log(username)
    }

    const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setCode(value)
    }

    const handdleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        closeForgotPassword();
    }

    async function onClickVerification(){

        if( newPassword === '' || code === '' ){
            return console.log("preencha os campos")
        }

        const response = await api.put(`/v3/users/recover-password`, {
            username,
            newPassword,
            verificationCode: code,
        });

        if (response.status === 200){
            console.log("senha alterada com sucesso")
        }
    }

    useEffect(() => {
        if (emailSent) return;

        
        const sendEmail = async () => {
            
            const { data } = await api.post(`/v3/users/recover-password?username=${username}`)
            setVerificationCode(data)

            try {
                await axios.post('https://sendmail-api-hggx.onrender.com/send/text', {
                    to: `${username}`,
                    subject: "Código de validação",
                    text: `Este é seu código de validação ${data}`
                });
                console.log('Email enviado com sucesso!');
                setEmailSent(true)
            } catch (error) {
                console.error('Erro ao enviar o email:', error);
            }
        };
    
        sendEmail();
    }, [emailSent, username]);
    

    return(
        <form onSubmit={handdleSubmit} className="bg-white rounded-lg w-[600px] h-auto p-8 flex gap-8 flex-col">
            <p className="font-medium text-center text-base italic text-zinc-500">
                Um e-mail será enviado para <span className="text-zinc-700 not-italic font-semibold">{username}</span>, 
                prosseguindo com os seguintes procedimentos para a recuperação de senha.</p>

            <div className="flex justify-center">
                <div className="flex flex-col justify-center gap-6 w-96 ">
                    <UserInput 
                        position="center" 
                        type={ isVisibleNewPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={handleChangeNewPassword}
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
                    <UserInput onChange={handleChangeCode} position="center" >
                        Código de validação
                    </UserInput>
                </div>
            </div>


            <div className="flex justify-between items-center">
                <button type="button" className="font-medium text-zinc-500 hover:text-zinc-600 hover:cursor-pointer">
                    Não recebi e-mail
                </button>

                <MainButton onClick={onClickVerification} type="button">
                    Verificar
                </MainButton>

                <MainButton width="min" type="submit">
                     OK
                </MainButton>
            </div>
        </form>
    )
}