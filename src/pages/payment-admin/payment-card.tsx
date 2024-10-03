

export function CardPayment(){
    return(
        <div className="w-full h-auto rounded-lg bg-gray-200 hover:cursor-pointer py-5">
            <div className="flex justify-between text-lg font-medium px-5">
                <h1>Nome usuário</h1>
                <h4>11/12/2022</h4>
            </div>
            <div className="mt-2 mb-2 px-10 ">
                <ol>
                    <li>produto</li>
                    <li>produto</li>
                    <li>produto</li>
                </ol>
            </div>
            <div className="flex justify-between font-medium px-5">
                <h3>Valor final: 270 pts</h3>
                <span className="text-lg text-red-600">pendente</span>
            </div>
        </div>
    )
};