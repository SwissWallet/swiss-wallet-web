import { X } from "lucide-react";

interface DrawerBuyProps{
    openDrawerBuy: boolean;
    setOpenDrawerBuy: (e: boolean) => void;
}

export function DrawerBuy({
    openDrawerBuy,
    setOpenDrawerBuy
}: DrawerBuyProps){
    return(
        <div className={`fixed z-50 p-5 bg-red-gradient h-full w-[20%] top-0 transition duration-1000  ${openDrawerBuy ? 'right-0' : '-right-60'} `}>
            <div className="flex justify-end pb-3">
                <button onClick={() => setOpenDrawerBuy(false)}>
                    <X className="size-5 text-white font-medium hover:scale-150 ease-in-out duration-300" />
                </button>
            </div>
            <div className="bg-white w-full h-[1px]" />
            
            <div className="bg-white w-full h-[1px]" />
        </div>
    )
};