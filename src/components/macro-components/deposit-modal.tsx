import { BackButton } from "../micro-components/back-button";
import { MainButton } from "../micro-components/main-button";
import { UserInput } from "../micro-components/user-input";

interface DepositModalProps{
    closeDepositModal: () => void,
}

export function DepositModal({
    closeDepositModal
}: DepositModalProps){
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <form className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
                <BackButton onClick={closeDepositModal}>
                </BackButton>
                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-medium">Deposite</h1>
                    <p className="font-medium text-sm text-zinc-600 ml-4">Todos os campos são obrigatórios</p>
                </div>
                <UserInput position="center">E-mail do usuário</UserInput>
                <UserInput position="center">Depósito</UserInput>

                <MainButton>Depositar</MainButton>
            </form>
        </div>
    )
}