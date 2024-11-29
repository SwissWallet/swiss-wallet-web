import { useState } from "react"
import { BackButton } from "../../components/micro-components/back-button"
import { UserInput } from "../../components/micro-components/user-input"
import { api } from "../../lib/axios";

interface ApprovedModalProps{
    idBenefit: string;
    setCStatus: (status: string) => void;
    setIsOpenApprovedModal: (e: boolean) => void;
    userId: number;
}

export function ApprovedModal({
    idBenefit,
    userId,
    setCStatus,
    setIsOpenApprovedModal,
}: ApprovedModalProps){

    const [ months, setMonths ] = useState<number>(0);
    const [ value, setValue ] = useState<number>(0);

    const handleConfirmed = (json: object) => {
        setCStatus("APPROVED");
        setIsOpenApprovedModal(false);
        console.log(json)
    };

    const handleConfirmClick = async () => {

        if(!months || !value) return

        await api.post(`/v3/benefits`, {
            userId,
            value,
            months,
            idBenefit
        })
        .then((json) => handleConfirmed(json.data))
        .catch((err) => console.log("error: \n", err))
    };


    return(
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg w-auto h-auto p-5 flex gap-8 flex-col">
                <BackButton type="button" />
                <div>
                    <h1>Defina a quantidade de meses do benêficio</h1>
                    <UserInput
                        type="number"
                        placeholder="ex: 4"
                        value={months!}
                        onChange={(e) => setMonths(Number(e.target.value))}
                    />
                </div>
                <div>
                    <h1>Defina o valor a ser debitado por cada mês</h1>
                    <UserInput
                        type="number"
                        placeholder="ex: 112,00"
                        value={value!}
                        onChange={(e) => setValue(Number(e.target.value))}
                    />
                </div>
                <div className="flex justify-between w-full">
                    <button
                        type="button"
                        onClick={() => setIsOpenApprovedModal(false)}
                        className="hover:bg-gray-400 px-3 py-1 rounded-md 
                                    transition-all border-gray-600 border-[1px]"
                    >Cancelar</button>
                    <button 
                        type="button"
                        onClick={handleConfirmClick}
                        className="bg-red-700 text-white px-3 py-1 
                                    rounded-md transition-all hover:bg-red-600 font-medium"
                    >Confirmar</button>
                </div>
            </div>
        </div>
    )
};