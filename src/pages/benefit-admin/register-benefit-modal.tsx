import { BackButton } from "../../components/micro-components/back-button";

interface RegisterBenefitModalProps{
    setIsOpenRegisterModal: (e: boolean) => void;
}

export function RegisterBenefitModal({
    setIsOpenRegisterModal,
}: RegisterBenefitModalProps){
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <form className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
                <BackButton type="button" onClick={() => setIsOpenRegisterModal(false)}/>

                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-medium">Altere seu endereço</h1>
                    <p className="font-medium text-sm text-zinc-600 ml-4">Todos os campos são obrigatórios</p>
                </div>

            </form>
        </div>
    )
};