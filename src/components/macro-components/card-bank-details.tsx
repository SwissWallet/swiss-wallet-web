import { X } from "lucide-react";
import background from "../../assets/images/background-card-bank.png";
import visa from "../../assets/images/visa-logo.svg";

interface CardBankDetailsProps{
    setOpenDetailsCard: (e: boolean) => void;
}

export function CardBankDetails({
    setOpenDetailsCard,
}: CardBankDetailsProps){
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="relative bg-black text-white rounded-lg w-[333px] h-[200px] rounded-t-lg flex flex-col gap-5">
                <div className="flex justify-between items-center p-5">
                    <h1 className="text-[11px] [#a7a7a7}">Saldo</h1>
                    <button onClick={() => setOpenDetailsCard(false)}>
                        <X className="size-4"/>
                    </button>
                </div>
                <div className="relative h-full">
                    <img 
                        src={background} 
                        className="absolute -top-11 right-0 -mb-20 size-36 object-cover z-0 opacity-50"
                    />
                    <div className="absolute top-0 left-5 z-10">
                        <h1 className="text-3xl">$ <span className="text-5xl">123</span><span className="text-2xl">,00</span></h1>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full h-[60px] bg-[#c50000] rounded-b-lg flex justify-between px-5">
                    <div className="flex justify-between w-full items-center">
                        <h1 className="text-2xl">**** 1234</h1>
                        <img src={visa} />
                    </div>
                </div>
            </div>
        </div>
    )
};