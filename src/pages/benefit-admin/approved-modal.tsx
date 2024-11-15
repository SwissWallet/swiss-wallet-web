import { BackButton } from "../../components/micro-components/back-button"
import { UserInput } from "../../components/micro-components/user-input"

export function ApprovedModal(){
    return(
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50">
            <form className="bg-white rounded-lg w-auto h-auto p-5 flex gap-8 flex-col">
                <BackButton type="button" />
                <div>
                    <h1>Defina a quantidade de meses do benêficio</h1>
                    <UserInput
                        type="number"
                        placeholder="ex: 4"
                    />
                </div>
                <div>
                    <h1>Defina o valor a ser debitado por cada mês</h1>
                    <UserInput
                        type="number"
                        placeholder="ex: 112,00"
                    />
                </div>
                <div className="flex justify-between w-full">
                    <button className="hover:bg-gray-400 px-3 py-1 rounded-md transition-all border-gray-600 border-[1px]">Cancelar</button>
                    <button className="bg-red-700 text-white px-3 py-1 rounded-md transition-all hover:bg-red-600 font-medium">Confirmar</button>
                </div>
            </form>
        </div>
    )
};