import { useState } from "react";
import { BackButton } from "../../components/micro-components/back-button";
import { ApprovedModal } from "./approved-modal";

interface ModalProps{
    setCStatus: (status: string) => void;
    setIsOpenChangedStatus: (e: boolean) => void;
    idBenefit: string;
    userId: string;
}

export function ChangedStatusModal({
    setCStatus,
    setIsOpenChangedStatus,
    idBenefit,
    userId,
}: ModalProps){

    const [ isOpenApproveddModal, setIsOpenApprovedModal ] = useState<boolean>(false);

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-2 lg:gap-8 flex-col">
                <BackButton type="button" onClick={() => setIsOpenChangedStatus(false)}/>
                <h1 className="text-2xl font-medium">Altere o status</h1>
                
                <button onClick={() => setIsOpenApprovedModal(true)}>
                    <h2>APROVADO</h2> 
                </button>
                <button onClick={() => setCStatus("NOT_APPROVED")}>
                    <h2>NÃO APROVADO</h2> 
                </button>

            </div>

            {isOpenApproveddModal && (
                <ApprovedModal 
                    idBenefit={idBenefit}
                    setCStatus={setCStatus}
                    setIsOpenApprovedModal={setIsOpenApprovedModal}
                    userId={Number(userId)}
                />
            )}
        </div>
    )
};