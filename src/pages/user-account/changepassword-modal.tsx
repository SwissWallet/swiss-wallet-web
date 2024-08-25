import { useState } from "react";
import { MainButton } from "../../components/micro-components/main-button";
import { UserInput } from "../../components/micro-components/user-input";
import { Eye , EyeOff } from "lucide-react";


interface ChangePassworModalProps{
    closeChangePasswordModal: () => void;
}


export function ChangePassworModal({closeChangePasswordModal}:ChangePassworModalProps){
    const [ isVisiblePassword, setIsVisiblePassword ] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

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

        closeChangePasswordModal();
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




