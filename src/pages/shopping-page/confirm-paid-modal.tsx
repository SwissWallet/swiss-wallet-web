import { BackButton } from "../../components/micro-components/back-button";

interface ConfirmPaidModalProps{
    setOpenConfirmPaidModal: (e: boolean) => void;
}

export function ConfirmPaidModal({
    setOpenConfirmPaidModal,
}: ConfirmPaidModalProps){
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
                <BackButton onClick={() => setOpenConfirmPaidModal(false)} />
                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-medium">Confirme seu pagamento</h1>
                    <p className="font-medium text-sm text-zinc-600 ml-4">Os pontos serão debitados de sua conta</p>
                </div>
            </div>
        </div>
    )
};