import { BackButton } from "../../components/micro-components/back-button";
import { CompletedStatus } from "./completed-status";
import { ProgressStatus } from "./progress-status";
import { UnavailableStatus } from "./unavailable-status";
import { WithDrawStatus } from "./withdraw-status";

interface ChangedStatusModalProps{
    setOpenStatusModal: (e: boolean) => void;
}

export function ChangedStatusModal({
    setOpenStatusModal,
}: ChangedStatusModalProps){
    return(
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50">
            <div className="w-auto h-auto p-5 bg-white rounded-lg gap-10 flex flex-col ">
                <BackButton onClick={() => setOpenStatusModal(false)} />
                <div className="flex flex-col items-center justify-center gap-8">

                    <button><ProgressStatus/></button>
                    <button><UnavailableStatus/></button>
                    <button><CompletedStatus/></button>
                    <button><WithDrawStatus/></button>
                </div>
            </div>
        </div>
    )
};