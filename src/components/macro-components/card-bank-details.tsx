import { X } from "lucide-react";
import visa from "../../assets/images/visa-logo.svg";

interface CardBankDetailsProps{
    setOpenDetailsCard: (e: boolean) => void;
}

export function CardBankDetails({
    setOpenDetailsCard,
}: CardBankDetailsProps){
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-black text-white rounded-lg w-[333px] rounded-t-lg flex flex-col gap-5">
                <div className="flex justify-between text-2xl items-center p-5">
                    <h1>Saldo</h1>
                    <button onClick={() => setOpenDetailsCard(false)}>
                        <X className="size-8"/>
                    </button>
                </div>
                <h1>$ <span>123,00</span></h1>
                <div className="bg-[#c50000] rounded-b-lg flex justify-between px-5">
                    <h1>**** 1234</h1>
                    <img src={visa} />
                </div>
            </div>
        </div>
    )
};