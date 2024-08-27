import { useState } from "react";
import { MainButton } from "../../components/micro-components/main-button";
import { UserInput } from "../../components/micro-components/user-input";
import { Eye , EyeOff } from "lucide-react";
import { api } from "../../lib/axios";

interface ChangePassworModalProps{
    closeChangePasswordModal: () => void;
}


export function ChangePassworModal({closeChangePasswordModal}:ChangePassworModalProps){
    const [ isVisiblePassword, setIsVisiblePassword ] = useState(false);
    const [ currentPassword, setCurrentPassword ] = useState('');
    const [ newPassword, setNewPassword ] = useState('');
    const [ confirmNewPassword, setConfirmNewPassword ] = useState('');

    function handdleVisiblePassword() {
        setIsVisiblePassword(!isVisiblePassword)
    }

    const handleCurrentPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPassword(e.target.value);
    };

    const handleChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
    };

    const handleChangeConfirmNewPassword =(e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmNewPassword(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();

        changePasswordCurrent()

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
                    console.log("senha alterada com sucesso")
                }
    
                
            }catch(err: unknown){
                const axiosError = err as { response: { status: number, data: { message?: string } } };
                if(err && typeof err === 'object' && 'response' in err){

                    if(axiosError.response.status === 400){
                        console.log('error 400')
                    }
                    if(axiosError.response.status === 403){
                        console.log('error 403')
                    }

                }
            }
        }

    }

    return (
        
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <form onSubmit={handleSubmit} className=" bg-white rounded-lg w-[600px] h-auto p-8 flex gap-8 flex-col">

                <div className="flex justify-center">
                    <div className="flex flex-col justify-center gap-6 w-96 ">
                        <UserInput 
                            position="center" 
                            type={ isVisiblePassword ? 'text' : 'password'}
                            value={currentPassword}
                            onChange={handleCurrentPassword}
                            isVisibleSvgIcon={true}
                            svgIcon={
                                isVisiblePassword ? (
                                <button onClick={handdleVisiblePassword} type="button" className="flex items-center">
                                    <Eye />
                                </button>
                             ) : (
                                <button onClick={handdleVisiblePassword} type="button" className="flex items-center">
                                    <EyeOff />
                                </button>
                                )
                            }
                        >
                            Senha Atual
                        </UserInput>

                        <UserInput 
                            position="center" 
                            type={ isVisiblePassword ? 'text' : 'password'}
                            value={newPassword}
                            onChange={handleChangeNewPassword}
                            isVisibleSvgIcon={true}
                            svgIcon={
                                isVisiblePassword ? (
                                <button onClick={handdleVisiblePassword} type="button" className="flex items-center">
                                    <Eye />
                                </button>
                             ) : (
                                <button onClick={handdleVisiblePassword} type="button" className="flex items-center">
                                    <EyeOff />
                                </button>
                                )
                            }
                        >
                            Nova senha
                        </UserInput>

                        <UserInput 
                            position="center" 
                            type={ isVisiblePassword ? 'text' : 'password'}
                            value={confirmNewPassword}
                            onChange={handleChangeConfirmNewPassword}
                            isVisibleSvgIcon={true}
                            svgIcon={
                                isVisiblePassword ? (
                                <button onClick={handdleVisiblePassword} type="button" className="flex items-center">
                                    <Eye />
                                </button>
                             ) : (
                                <button onClick={handdleVisiblePassword} type="button" className="flex items-center">
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




