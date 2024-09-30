//@ts-nocheck
import { X } from "lucide-react";
import { MainButton } from "../micro-components/main-button";
import { api } from "../../lib/axios";
import { useEffect } from "react";

interface CheckProduts{
    id: string;
    title: string;
    value: number;
}
interface DrawerBuyProps{
    openDrawerBuy: boolean;
    selectedProducts: CheckProduts[];
    setOpenDrawerBuy: (e: boolean) => void;
};

interface PurchaseOrder{
    title: string;
    value: number;
}

export function DrawerPurchase({
    openDrawerBuy,
    selectedProducts,
    setOpenDrawerBuy,
}: DrawerBuyProps){

    let ids = [];
    

    async function savePurchase(){
        const token = localStorage.getItem('token');

        await api.post(`/v3/order/carts`, {
            headers: {
                'Authorization' : `Bearer ${token}`
            },
            productIds: ids,
        })
    };

    let finalValue = 0;

    selectedProducts.map((item) => (
        finalValue += item.value
    ))
    
    useEffect(() => {
        selectedProducts.map((item) => (
            ids.push(item.id)
        ))
    }, [ids, selectedProducts])

    return(
        <div className={`rounded-md fixed z-50 p-5 bg-red-gradient h-auto w-[20%] top-0 transition duration-1000  ${openDrawerBuy ? 'right-0' : '-right-60'} `}>
            <div className="flex justify-end pb-3">
                <button onClick={() => setOpenDrawerBuy(false)}>
                    <X className="size-5 text-white font-medium hover:scale-150 ease-in-out duration-300" />
                </button>
            </div>
            <div className="bg-white w-full h-[1px]" />
                {selectedProducts.length > 0 && (
                    selectedProducts.map((item) => (
                        <div key={item.id}>
                            <ItemPurchaseOrder 
                                title={item.title}
                                value={item.value}
                            />
                        </div>
                    ))
                )}
            <div className="bg-white w-full h-[1px]" />

                <div className="my-5 flex justify-between items-center text-white font-bold">
                    <h2 className="text-xl">TOTAL: </h2>
                    <h1 className="text-2xl">{finalValue} pts</h1>
                </div>

            <div className="bg-white w-full h-[1px]" />
            <div className="flex justify-center mt-5">
                <MainButton onClick={savePurchase} width="min">
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