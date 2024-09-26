import { X } from "lucide-react";
// import { useState } from "react";
import { MainButton } from "../micro-components/main-button";

interface DrawerBuyProps{
    openDrawerBuy: boolean;
    setOpenDrawerBuy: (e: boolean) => void;
};

interface PurchaseOrder{
    title: string;
    value: number;
}

export function DrawerBuy({
    openDrawerBuy,
    setOpenDrawerBuy
}: DrawerBuyProps){

    // const [ purchaseOrderList, setPurchaseOrderList ] = useState<PurchaseOrder[]>([]);

    return(
        <div className={`rounded-md fixed z-50 p-5 bg-red-gradient h-auto w-[20%] top-0 transition duration-1000  ${openDrawerBuy ? 'right-0' : '-right-60'} `}>
            <div className="flex justify-end pb-3">
                <button onClick={() => setOpenDrawerBuy(false)}>
                    <X className="size-5 text-white font-medium hover:scale-150 ease-in-out duration-300" />
                </button>
            </div>
            <div className="bg-white w-full h-[1px]" />
                <ItemPurchaseOrder 
                    title="camiseta"
                    value={40}
                />
                <ItemPurchaseOrder 
                    title="livro"
                    value={40}
                />
                <ItemPurchaseOrder 
                    title="coca cola"
                    value={40}
                />
            <div className="bg-white w-full h-[1px]" />

                <div className="my-5 flex justify-between items-center text-white font-bold">
                    <h2 className="text-xl">TOTAL: </h2>
                    <h1 className="text-2xl">120 pts</h1>
                </div>

            <div className="bg-white w-full h-[1px]" />
            <div className="flex justify-center mt-5">
                <MainButton>
                    Finalizar
                </MainButton>
            </div>
        </div>
    )
};

function ItemPurchaseOrder({
    title,
    value
}:PurchaseOrder){
    return(
        <div className="flex justify-between items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100 cursor-pointer">
            <span className="text-white font-medium">{title}</span>
            <span className="text-white font-medium">{value} pts</span>
        </div>
    )
}