import { X } from "lucide-react";
import { ReactNode, useState } from "react";
import { MainButton } from "../../components/micro-components/main-button";
import { ChangedStatusModal } from "./changed-status-modal";
import { StatusKey } from ".";
import { BackButton } from "../../components/micro-components/back-button";

interface OrderCardProductProps{
    title: string,
    image: string,
    id: string
    value: number,
    category?: string,
    status: ReactNode,
    setOpenOrderCard: (e: boolean) => void,
    setSelectedStatus: (e: StatusKey) => void,
    selectStatus: StatusKey,
    changedStatusProduct: (id , statusAlt) => void,
}

export function OrderCardProduct({
    image,
    setOpenOrderCard,
    setSelectedStatus,
    selectStatus,
    id,
    status,
    title,
    value,
    changedStatusProduct
}: OrderCardProductProps){

    const [ openStatusModal, setOpenStatusModal ] = useState(false);

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
            <div className="flex">
                    <div className="bg-white rounded-xl shadow-xl p-5">
                        <BackButton type="button" onClick={() => setOpenOrderCard(false)}/>
                        <img className="w-[309px] h-[407px]" src={image} alt="produto" />
                    </div>
                    <article className="flex flex-col w-1/2 justify-between p-5">
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-end">
                                <button className="flex justify-end" onClick={() => setOpenOrderCard(false)}><X className="size-6 hover:text-zinc-300 text-white" /></button>
                            </div>
                            <h1 className="font-bold text-4xl">{title}</h1>
                        </div>
                        <div className="flex justify-center">
                            <h1 className="text-3xl font-extrabold">{value} <span className="text-xl font-semibold">   pontos</span></h1>
                        </div>
                        {status}
                    <MainButton onClick={() => setOpenStatusModal(true)}>Status</MainButton>
                    </article>
                </div>
            </div>
            {openStatusModal && (
                <ChangedStatusModal 
                    id={id}
                    setSelectedStatus={setSelectedStatus} 
                    setOpenStatusModal={setOpenStatusModal}
                    changedStatusProduct={(id , selectedStatus) => changedStatusProduct(id, selectedStatus)}
                />
            )}
        </div>
    )
};