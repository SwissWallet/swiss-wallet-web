import { BackButton } from "../../components/micro-components/back-button";

interface DeleteAccountModalProps{
    closeDeleteAccountModal: () => void,
}

export function DeleteAccountModal({
    closeDeleteAccountModal,
}:DeleteAccountModalProps){
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <form className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
                <BackButton type="button" onClick={closeDeleteAccountModal}/>
            </form>
        </div>
    )
}