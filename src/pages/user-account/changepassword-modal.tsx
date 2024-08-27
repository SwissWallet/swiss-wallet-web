import { useState } from "react";
import { MainButton } from "../../components/micro-components/main-button";
import { UserInput } from "../../components/micro-components/user-input";
import { Eye , EyeOff } from "lucide-react";
import { api } from "../../lib/axios";
import { BackButton } from "../../components/micro-components/back-button";

interface ChangePassworModalProps{
    closeChangePasswordModal: () => void;
}


export function ChangePassworModal({closeChangePasswordModal}:ChangePassworModalProps){

    //estado para exibir possivel erro ao usuário
    const [ textAlert, setTextAlert ] = useState('')
    
    //estado para capturar possiveis erros
    const [ wasChanged, setWasChanged ] = useState<boolean | undefined>();

    //estados para ocultar ou não a senha
    const [ isVisibleCurrentPassword, setIsVisibleCurrentPassword ] = useState(false);
    const [ isVisibleNewPassword, setIsVisibleNewPassword ] = useState(false);
    const [ isVisibleConfirmPassword, setIsVisibleConfirmPassword ] = useState(false);

    //estados para capturar e armazenar dados do usuário
    const [ currentPassword, setCurrentPassword ] = useState('');
    const [ newPassword, setNewPassword ] = useState('');
    const [ confirmNewPassword, setConfirmNewPassword ] = useState('');

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();

        if(currentPassword === '' || newPassword === '' || confirmNewPassword === ''){
            setTextAlert("*Insira uma senha*")
            return
        }

        changePasswordCurrent();

        if(!wasChanged){
            return
        }

        closeChangePasswordModal();
    }

    async function changePasswordCurrent() {

        const token = localStorage.getItem("token");
        console.log(token)

        if(token){
            try{
                const response = await api.put(
                    `/v3/users/password`, 
                    {
                        currentPassword,
                        newPassword,
                        confirmPassword: confirmNewPassword
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        },
                    }
                );

                if(response.status === 200){
                    setWasChanged(true)
                    console.log("senha alterada com sucesso")
                }
    
                
            }catch(err: unknown){
                const axiosError = err as { response: { status: number, data: { message?: string } } };
                if(err && typeof err === 'object' && 'response' in err){

                    setWasChanged(false)

                    if(axiosError.response.status === 400){
                        setTextAlert("*Senha atual inválida*")
                    }
                    if(axiosError.response.status === 403){
                        setTextAlert("*Usuário sem acesso*")
                    }

                }
            }
        }

    }

    return (
        
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
                <div className="flex w-full justify-start">
                    <BackButton type="button" onClick={closeChangePasswordModal} />
                </div>

                <div className="flex justify-center w-auto">
                    <div className="flex flex-col  gap-6 w-96 ">
                        <div className="flex items-center w-full relative">
                            <p className="absolute text-red-700 text-center w-full font-medium text-lg">{textAlert}</p>
                        </div>
                        <UserInput 
                            position="center" 
                            type={ isVisibleCurrentPassword ? 'text' : 'password'}
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            isVisibleSvgIcon={true}
                            svgIcon={
                                isVisibleCurrentPassword ? (
                                <button onClick={() => setIsVisibleCurrentPassword(false)} type="button" className="flex items-center">
                                    <Eye />
                                </button>
                             ) : (
                                <button onClick={() => setIsVisibleCurrentPassword(true)} type="button" className="flex items-center">
                                    <EyeOff />
                                </button>
                                )
                            }
                        >
                            Senha Atual
                        </UserInput>

                        <UserInput 
                            position="center" 
                            type={ isVisibleNewPassword ? 'text' : 'password'}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            isVisibleSvgIcon={true}
                            svgIcon={
                                isVisibleNewPassword ? (
                                <button onClick={() => setIsVisibleNewPassword(false)} type="button" className="flex items-center">
                                    <Eye />
                                </button>
                             ) : (
                                <button onClick={() => setIsVisibleNewPassword(true)} type="button" className="flex items-center">
                                    <EyeOff />
                                </button>
                                )
                            }
                        >
                            Nova senha
                        </UserInput>

                        <UserInput 
                            position="center" 
                            type={ isVisibleConfirmPassword ? 'text' : 'password'}
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            isVisibleSvgIcon={true}
                            svgIcon={
                                isVisibleConfirmPassword ? (
                                <button onClick={() => setIsVisibleConfirmPassword(false)} type="button" className="flex items-center">
                                    <Eye />
                                </button>
                             ) : (
                                <button onClick={() => setIsVisibleConfirmPassword(true)} type="button" className="flex items-center">
                                    <EyeOff />
                                </button>
                                )
                            }
                        >
                            Confirmar nova senha

                        </UserInput>
   
                    </div>
                </div>


                <div className="flex justify-center">

                    <MainButton type="submit">
                        Ok
                    </MainButton>
                    
                </div>
            </form>

        </div>

    )

};




