import { BackButton } from "../../components/micro-components/back-button";
import { CompletedStatus } from "./completed-status";
import { ProgressStatus } from "./progress-status";
import { UnavailableStatus } from "./unavailable-status";
import { WithDrawStatus } from "./withdraw-status";

interface ChangedStatusModalProps{
    setOpenStatusModal: (e: boolean) => void;
    setSelectedStatus: (e: string) => void;
};

export function ChangedStatusModal({
    setOpenStatusModal,
    setSelectedStatus,
}: ChangedStatusModalProps){



    return(
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50">
            <div className="w-auto h-auto p-5 bg-white rounded-lg gap-10 flex flex-col ">
                <BackButton onClick={() => setOpenStatusModal(false)} />
                    
                <h1 className="font-medium text-2xl">Altere o status do pedido</h1>
                    
                <div className="flex flex-col items-center justify-center gap-8">

                    <button onClick={() => setSelectedStatus("progress")} className="w-full">
                        <div className="items-start flex px-5 py-2 hover:bg-slate-100">
                            <ProgressStatus/>
                        </div>
                    </button>
                    <button onClick={() => setSelectedStatus("withdraw")} className="w-full">
                        <div className="items-start flex hover:border-slate-400 border-dashed border-slate-500 px-5 py-2 hover:bg-slate-200">
                            <WithDrawStatus/>
                        </div>
                    </button>
                    <button onClick={() => setSelectedStatus("completed")} className="w-full">
                        <div className="items-start flex hover:border-slate-400 border-dashed border-slate-500 px-5 py-2 hover:bg-slate-200">
                            <CompletedStatus/>
                        </div>
                    </button>
                    <button onClick={() => setSelectedStatus("unavailable")} className="w-full">
                        <div className="items-start flex hover:border-slate-400 border-dashed border-slate-500 px-5 py-2 hover:bg-slate-200">
                            <UnavailableStatus/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
};