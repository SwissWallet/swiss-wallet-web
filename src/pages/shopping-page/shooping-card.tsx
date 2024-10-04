interface ShoppingCardProps{
    id?: string;
    dateTime: string;
    productName: string[];
    status: string;
    value?: number;
}

export function ShoppingCard({
    dateTime,
    productName,
    status,
}: ShoppingCardProps){
    return(
                <div className="w-full h-auto flex flex-col px-8 justify-between rounded-lg font-medium text-2xl py-10 bg-gray-200 hover:cursor-pointer">
                    <h4 className="text-end">{dateTime}</h4>

                    <div className="mt-8">
                    <ol>
                        {productName.map((product, index) => (
                            <li key={index}>{product}</li>
                        ))}
                    </ol>
                    </div>

                    <div className="w-full h-[1px] mt-8 bg-gray-800"/>
                    
                    <div className="flex mt-8 justify-between">
                        <div className="text-center flex flex-col gap-4">
                            <h1 className="text-zinc-700">pagamento:</h1>
                            <h1 className="text-zinc-700">{status}</h1>
                        </div>
                        <button
                            className="bg-red-600 hover:bg-red-700 px-10 py-2 rounded-md text-white-90 font-medium"
                        >
                            REALIZAR PAGAMENTO
                        </button>
                    </div>
                    
                </div>

    )
};