import { BackButton } from "../../components/micro-components/back-button";
import { UserInput } from "../../components/micro-components/user-input";
import { MainButton } from "../../components/micro-components/main-button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setConfirmPassword, setNewPassword } from "../../features/validation-password-slice";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface RegisterThirdStepProps {
    finishedThirdStep: () => void,
    backToTheSecondaryStep: () => void,
    registerUser: () => void,
}

export function RegisterThirdStep({
    finishedThirdStep,
    backToTheSecondaryStep,
    registerUser,
}: RegisterThirdStepProps) {

    const dispatch = useDispatch<AppDispatch>()

    const { isEqual, hasStartedTypingInNew, hasStartedTypingInConfirm } = useSelector(
        (state: RootState) => state.validationPassword
    );

    function handleNewPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setNewPassword(e.target.value));
    }

    function handleConfirmPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setConfirmPassword(e.target.value));
    }

    const handdleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('passei aqui')
        registerUser()
        finishedThirdStep();
    }

    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState(false);

    function handdleVisiblePassword() {
        setIsVisiblePassword(!isVisiblePassword);
    }

    function handdleVisibleConfirmPassword() {
        setIsVisibleConfirmPassword(!isVisibleConfirmPassword);
    }

    return (
        <div className="bg-white rounded-lg w-[600px] h-auto p-8 flex gap-8 flex-col">

            <BackButton onClick={backToTheSecondaryStep} />

            <form onSubmit={handdleSubmit} className="flex gap-8 flex-col">


                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-medium">Cadastre-se</h1>
                    <p className="font-medium text-sm text-zinc-600 ml-4">Todos os campos são obrigatórios</p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="bg-default-red h-10 w-10 rounded-full"></div>
                    <div className="bg-default-red h-[2px] w-16"></div>
                    <div className="bg-default-red h-10 w-10 rounded-full"></div>
                    <div className="bg-default-red h-[2px] w-16"></div>
                    <div className="bg-default-red h-10 w-10 rounded-full"></div>
                </div>
                <div className="flex flex-col gap-6">

                    <div className="flex items-center">
                        <UserInput
                            onChange={handleNewPasswordChange}
                            placeholder="ex: senha1234"
                            type={isVisiblePassword ? 'text' : 'password'}
                            isVisibleSvgIcon={true}
                            svgIcon={isVisiblePassword ? (
                                <button className="flex items-center" type="button" onClick={handdleVisiblePassword}>
                                    <Eye />
                                </button>
                            ) : (
                                <button className="flex items-center" type="button" onClick={handdleVisiblePassword}>
                                    <EyeOff />
                                </button>
                            )}
                        >
                            Crie uma senha
                        </UserInput>
                    </div>



                    <UserInput
                        onChange={handleConfirmPasswordChange}
                        placeholder="ex: senha1234"
                        type={isVisibleConfirmPassword ? 'text' : 'password'}
                        isVisibleSvgIcon={true}
                        svgIcon={isVisibleConfirmPassword ? (
                            <button className="flex items-center" type="button" onClick={handdleVisibleConfirmPassword}>
                                <Eye />
                            </button>
                        ) : (
                            <button className="flex items-center" type="button" onClick={handdleVisibleConfirmPassword}>
                                <EyeOff />
                            </button>
                        )}
                    >
                        Confirme sua senha
                    </UserInput>

                    <div className="flex justify-center items-center -mt-4">
                        {hasStartedTypingInNew && hasStartedTypingInConfirm && isEqual !== undefined && (
                            isEqual ? (
                                <span className="text-transparent">senha aprovada</span>
                            ) : (
                                <span className="text-red-700 font-medium">*as senhas fornecidas são diferentes</span>
                            )
                        )}
                    </div>
                    <div className="flex justify-evenly gap-5">
                        <div className="flex gap-4 items-center">
                            <input type="checkbox" className="size-4 hover:cursor-pointer" />
                            <span className="text-zinc-600 font-medium">Aceito termos e condições</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <input type="checkbox" className="size-4 hover:cursor-pointer" />
                            <span className="text-zinc-600 font-medium">Não sou um robô</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <MainButton type="submit" >
                        Cadastrar
                    </MainButton>
                </div>

            </form>
        </div>
    )
}