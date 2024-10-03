
interface CardPaymentProps{
    id?: string;
    name: string;
    dateTime: string;
    productName: string[];
    status: string;
    value: number;
}

export function CardPayment({
    name,
    value,
    status,
    dateTime,
    productName,
}: CardPaymentProps){
    return(
        <div className="w-full h-[184px] flex flex-col justify-between rounded-lg bg-gray-200 hover:cursor-pointer py-5">
            <div className="flex justify-between text-lg font-medium px-5">
                <h1>{name}</h1>
                <h4>{dateTime}</h4>
            </div>
            <div className="mt-2 mb-2 px-10 ">
                <ol>
                    {productName.slice(0, 3).map((product, index) => (
                        <li key={index}>{product}</li>
                    ))}
                </ol>
            </div>
            <div className="flex justify-between font-medium px-5">
                <h3>Valor final: {value} pts</h3>
                <span className="text-lg text-red-600">{status}</span>
            </div>
        </div>
    )
};