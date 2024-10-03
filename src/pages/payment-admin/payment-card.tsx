

export function CardPayment(){
    return(
        <div className="w-1/3 h-auto rounded-lg bg-gray-200 hover:cursor-pointer py-5">
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
            <div className="flex justify-between text-lg font-medium px-5">
                <h3>Valor final: 270 pts</h3>
                <button
                    className="bg-red-600 hover:bg-red-700 text-white font-medium text-sm px-2 rounded-md"
                >
                    efetuar pagamento
                </button>
            </div>
        </div>
    )
};