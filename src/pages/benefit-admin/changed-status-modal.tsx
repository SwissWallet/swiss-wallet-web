import { BackButton } from "../../components/micro-components/back-button";

interface ModalProps{
    setCStatus: (status: string) => void;
    setIsOpenChangedStatus: (e: boolean) => void;
}

export function ChangedStatusModal({
    setCStatus,
    setIsOpenChangedStatus,
}: ModalProps){
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-2 lg:gap-8 flex-col">
                <BackButton type="button" onClick={() => setIsOpenChangedStatus(false)}/>
                <h1 className="text-2xl font-medium">Altere o status</h1>
                
                <button onClick={() => setCStatus("APPROVED")}>
                    <h2>APROVADO</h2> 
                </button>
                <button onClick={() => setCStatus("NOT_APPROVED")}>
                    <h2>NÃO APROVADO</h2> 
                </button>

            </div>
        </div>
    )
};