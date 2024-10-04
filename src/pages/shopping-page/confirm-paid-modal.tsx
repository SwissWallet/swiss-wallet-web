import { BackButton } from "../../components/micro-components/back-button";
import { MainButton } from "../../components/micro-components/main-button";
import { api } from "../../lib/axios";

interface ConfirmPaidModalProps{
    id: string;
    value: number;
    setOpenConfirmPaidModal: (e: boolean) => void;
}

export function ConfirmPaidModal({
    id,
    value,
    setOpenConfirmPaidModal,
}: ConfirmPaidModalProps){

    
    async function ConfirmPaid(){
        api.post(`/v3/order/carts/paid/${id}`)
        .then(() => setOpenConfirmPaidModal(false))
        .catch((err) => console.log(err))
    };
    

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg w-3/4 lg:w-[600px] h-auto p-5 flex gap-8 flex-col">
                <BackButton onClick={() => setOpenConfirmPaidModal(false)} />
                <header className="flex flex-col gap-3">
                    <h1 className="text-4xl font-medium">Confirme seu pagamento</h1>
                    <p className="font-medium text-sm text-zinc-600 ml-4">Os pontos serão debitados de sua conta</p>
                </header>
                <main className="text-zinc-700 flex flex-col pl-10">
                    <h1>Carrinho: {id}</h1>
                    <h1>Valor: {value} pts</h1>
                </main>
                <footer className="flex justify-center">
                    <MainButton onClick={ConfirmPaid} width="min">Confirmar</MainButton>
                </footer>
            </div>
        </div>
    )
};