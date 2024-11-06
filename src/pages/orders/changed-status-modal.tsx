import { StatusKey } from ".";
import { BackButton } from "../../components/micro-components/back-button";
import { CompletedStatus } from "./status-components/completed-status";
import { ProgressStatus } from "./status-components/progress-status";
import { UnavailableStatus } from "./status-components/unavailable-status";
import { WithdrawStatus } from "./status-components/withdraw-status";

interface ChangedStatusModalProps{
    id: string,
    setOpenOrderCard: (e: boolean) => void;
    setOpenStatusModal: (e: boolean) => void;
    setSelectedStatus?: (e: StatusKey) => void;
    changedStatusProduct: (id: string, statusAlt: StatusKey) => void,
};

export function ChangedStatusModal({
    id,
    setOpenStatusModal,
    changedStatusProduct,
    setOpenOrderCard,
}: ChangedStatusModalProps){

    return(
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50">
            <div className="w-auto h-auto p-5 bg-white rounded-lg gap-10 flex flex-col ">
                <BackButton onClick={() => setOpenStatusModal(false)} />
                    
                <h1 className="font-medium text-2xl">Altere o status do pedido</h1>
                    
                <div className="flex flex-col items-center justify-center gap-8">

                    <button onClick={() => {
                            changedStatusProduct(id, "ANALYSIS");
                            setOpenStatusModal(false);
                            setOpenOrderCard(false);
                        }} className="w-full">
                        <div className="items-start flex px-5 py-2 hover:bg-slate-100">
                            <ProgressStatus/>
                        </div>
                    </button>
                    <button onClick={() => {
                            changedStatusProduct(id, "SEPARATED");
                            setOpenStatusModal(false);
                            setOpenOrderCard(false);
                        }} className="w-full">
                        <div className="items-start flex hover:border-slate-400 border-dashed border-slate-500 px-5 py-2 hover:bg-slate-200">
                            <WithdrawStatus/>
                        </div>
                    </button>
                    <button onClick={() => {
                            changedStatusProduct(id, "COMPLETED");
                            setOpenStatusModal(false);
                            setOpenOrderCard(false);
                        }} className="w-full">
                        <div className="items-start flex hover:border-slate-400 border-dashed border-slate-500 px-5 py-2 hover:bg-slate-200">
                            <CompletedStatus/>
                        </div>
                    </button>
                    <button onClick={() => {
                            changedStatusProduct(id, "UNAVAILABLE");
                            setOpenStatusModal(false);
                            setOpenOrderCard(false);  
                        }} className="w-full">
                        <div className="items-start flex hover:border-slate-400 border-dashed border-slate-500 px-5 py-2 hover:bg-slate-200">
                            <UnavailableStatus/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
};