import { useState } from "react";
import { ConfirmPaidModal } from "./confirm-paid-modal";

interface ShoppingCardProps {
    id: string;
    dateTime: string;
    productName: string[];
    status: string;
    value: number;
    getShoppingCart: () => void;
}

export function ShoppingCard({
    id,
    dateTime,
    productName,
    status,
    value,
    getShoppingCart,
}: ShoppingCardProps) {

    const [openConfirmPaidModal, setOpenConfirmPaidModal] = useState(false);

    return (
        <div className="w-full max-w-xl mx-auto h-auto flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 justify-between rounded-lg font-medium text-lg sm:text-xl md:text-2xl py-6 sm:py-8 md:py-10 bg-gray-200 hover:cursor-pointer">
            <div className="flex justify-between items-center flex-wrap">
                <span className="text-xl sm:text-2xl md:text-3xl">Carrinho: {id}</span>
                <h4 className="text-sm sm:text-base">{dateTime}</h4>
            </div>

            <div className="mt-4 sm:mt-6 md:mt-8">
                <ol className="list-inside list-decimal">
                    {productName.map((product, index) => (
                        <li key={index} className="text-sm sm:text-base md:text-lg">{product}</li>
                    ))}
                </ol>
            </div>

            <div className="w-full h-[1px] mt-6 sm:mt-8 bg-gray-800" />

            <div className="flex flex-col sm:flex-row mt-6 sm:mt-8 justify-between items-start sm:items-center">
                <h1 className="text-gray-700 text-lg sm:text-xl md:text-2xl">
                    Valor Total:{" "}
                    <span className={`text-2xl sm:text-3xl md:text-4xl ${status === "PAGO" ? "text-gray-700" : "text-red-600"}`}>
                        {value} pts
                    </span>
                </h1>
                <h1 className="text-gray-700 text-lg sm:text-xl md:text-2xl">
                    Pagamento:{" "}
                    <span className={`text-2xl sm:text-3xl md:text-4xl ${status === "PAGO" ? "text-gray-700" : "text-red-600"}`}>
                        {status}
                    </span>
                </h1>
                {status === "PAGO" ? (
                    <button
                        disabled
                        className="bg-gray-600 px-6 sm:px-8 py-2 rounded-md text-white font-medium mt-4 sm:mt-0"
                    >
                        FINALIZADO
                    </button>
                ) : (
                    <button
                        onClick={() => setOpenConfirmPaidModal(true)}
                        className="bg-red-600 hover:bg-red-700 px-6 sm:px-8 py-2 rounded-md text-white font-medium mt-4 sm:mt-0"
                    >
                        REALIZAR PAGAMENTO
                    </button>
                )}
            </div>

            {openConfirmPaidModal && (
                <ConfirmPaidModal
                    id={id}
                    value={value}
                    getShoppingCart={getShoppingCart}
                    setOpenConfirmPaidModal={setOpenConfirmPaidModal}
                />
            )}
        </div>
    );
};
