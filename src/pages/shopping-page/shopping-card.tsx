import { useState } from "react";
import { ConfirmPaidModal } from "./confirm-paid-modal";

interface ShoppingCardProps{
    id: string;
    dateTime: string;
    productName: string[];
    status: string;
    value: number;
}

export function ShoppingCard({
    id,
    dateTime,
    productName,
    status,
    value
}: ShoppingCardProps){

    const [ openConfirmPaidModal, setOpenConfirmPaidModal ] = useState(false);

    return(
                <div className="w-full h-auto flex flex-col px-8 justify-between rounded-lg font-medium text-2xl py-10 bg-gray-200 hover:cursor-pointer">
                    <div className="flex justify-between">
                        <span className="text-3xl">Carrinho: {id}</span>
                        <h4>{dateTime}</h4>
                    </div>

                    <div className="mt-8">
                    <ol>
                        {productName.map((product, index) => (
                            <li key={index}>{product}</li>
                        ))}
                    </ol>
                    </div>

                    <div className="w-full h-[1px] mt-8 bg-gray-800"/>
                    
                    <div className="flex mt-8 justify-between">
                            <h1 className="text-zinc-700">Valor Total: <span className="text-4xl text-red-600">{value} pts</span></h1>
                            <h1 className="text-zinc-700">pagamento: <span className="text-3xl text-red-600">{status}</span></h1>
                        
                        <button
                            onClick={() => setOpenConfirmPaidModal(true)}
                            className="bg-red-600 hover:bg-red-700 px-10 py-2 rounded-md text-white-90 font-medium"
                        >
                            REALIZAR PAGAMENTO
                        </button>
                    </div>

                    {openConfirmPaidModal && (
                        <ConfirmPaidModal 
                            id={id}
                            value={value}
                            setOpenConfirmPaidModal={setOpenConfirmPaidModal}
                        />
                    )}
                    
                </div>

    )
};