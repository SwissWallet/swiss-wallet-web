import { X } from "lucide-react";

interface DepositModalProps{
    closeDepositModal: () => void,
}

export function DepositModal({
    closeDepositModal
}: DepositModalProps){
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <form className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
                <button className="size-6 text-zinc-700" onClick={closeDepositModal}>
                    <X />
                </button>
            </form>
        </div>
    )
}