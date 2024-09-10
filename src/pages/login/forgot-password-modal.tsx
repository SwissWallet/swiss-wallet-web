import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MainButton } from "../../components/micro-components/main-button";
import { UserInput } from "../../components/micro-components/user-input";
import { api } from "../../lib/axios";

interface ForgotPasswordProps {
    closeForgotPassword: () => void,
    setTextAlert: (e: string) => void,
    textAlert: string,
    username: string,
}

export function ForgotPassword({
    closeForgotPassword,
    setTextAlert,
    textAlert,
    username
}: ForgotPasswordProps) {

    //estado para validação de usuário
    const [foundUser, setFoundUser] = useState<boolean | undefined>();

    //estado para ocultar ou não a senha
    const [isVisibleNewPassword, setIsVisibleNewPassword] = useState(false);

    //estado para gerenciamento de envio de email
    const [emailSent, setEmailSent] = useState(false);

    //estados para capturar nova senha e código do usuário
    const [newPassword, setNewPassword] = useState('')
    const [code, setCode] = useState('')

    //estados para armazenar código gerado pela api
    const [verificationCode, setVerificationCode] = useState('')
    const verificationCodeRef = useRef('');

    function handdleVisibleNewPassword() {
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
        Verification();
        setTextAlert("");
        closeForgotPassword();
    }

    async function Verification() {

        if (newPassword === '' || code === '') {
            return setTextAlert("preencha os campos")
        }

        try {
            const response = await api.put(`/v3/users/recover-password`, {
                username,
                newPassword,
                verificationCode: code,
            })

            if (response.status === 200) {
                return console.log("senha alterada com sucesso")
            };
        } catch (err: unknown) {
            if (err && typeof err === 'object' && 'response' in err) {
                const axiosError = err as { response: { status: number, data: { message?: string } } };
                if (axiosError.response.status === 400) {
                    setTextAlert("código inválido")
                };
                if (axiosError.response.status === 404) {
                    setTextAlert("usuário não encontrado")
                };
            };
        };

    };

    useEffect(() => {

        if (emailSent) {
            console.log('passei aqui')
            return
        }

        const sendEmail = async () => {

            try {
                //gerar código aleatório
                const response = await api.post(
                    `/v3/users/recover-password?username=${username}`
                );
                if (response.status === 200) {
                    verificationCodeRef.current = response.data
                    setFoundUser(true)
                    console.log(response.data)
                    setVerificationCode(response.data)
                };
            } catch (err: unknown) {
                const axiosError = err as { response: { status: number, data: { message?: string } } };
                if (axiosError.response.status === 404) {
                    setTextAlert("*usuário não encontrado*")
                    setFoundUser(false)
                }
            }

            //capturando resposta da verificação do usuário

            if (foundUser) {
                try {
                    //envio de e-mail
                    await axios.post('https://sendmail-api-hggx.onrender.com/send/text', {
                        to: `${username}`,
                        subject: "Código de validação",
                        text: `Este é seu código de validação ${verificationCodeRef.current}`
                    });
                    console.log('Email enviado com sucesso!');
                    setEmailSent(true)
                } catch (error) {
                    console.error('Erro ao enviar o email:', error);
                }
            }

        };

        sendEmail()

    }, [emailSent, username, setTextAlert, foundUser])

    return (
        <form onSubmit={handdleSubmit} className="bg-white rounded-lg w-[600px] h-auto p-8 flex gap-8 flex-col">
            <p className="font-medium text-center text-base italic text-zinc-500">
                Um e-mail será enviado para <span className="text-zinc-700 not-italic font-semibold">{username}</span>,
                prosseguindo com os seguintes procedimentos para a recuperação de senha.</p>
            <div className="flex items-center w-full relative h-auto">
                <p className="absolute  text-red-700 text-center w-full font-medium text-lg">{textAlert}</p>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center gap-6 w-96 ">
                    <UserInput
                        position="center"
                        type={isVisibleNewPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={handleChangeNewPassword}
                        minLength={6} required
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
                <button

                    className="font-medium text-zinc-500 hover:text-zinc-600 hover:cursor-pointer"
                    type="button">
                    Não recebi e-mail
                </button>

                <MainButton type="submit">
                    OK
                </MainButton>
            </div>
        </form>
    )
}