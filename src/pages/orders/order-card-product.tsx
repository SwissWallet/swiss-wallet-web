import { api } from "../../lib/axios";
import { ReactNode, useState } from "react";
import { BackButton } from "../../components/micro-components/back-button";
import { MainButton } from "../../components/micro-components/main-button";

interface OrderCardProductProps{
    title: string,
    image: string,
    id: string;
    value: number,
    category?: string,
    status?: ReactNode,
    setOpenOrderCard: (e: boolean) => void,
    orderId: string | undefined;
}

export function OrderCardProduct({
    image,
    setOpenOrderCard,
    title,
    value,
    orderId,
}: OrderCardProductProps){

    const [ openCancelOrderModal, setOpenCancelOrderModal ] = useState(false);

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
            <div className="flex">
                    <div className="bg-white rounded-xl shadow-xl p-5 gap-2 flex flex-col">
                        <BackButton type="button" onClick={() => setOpenOrderCard(false)}/>
                        <img className="w-[309px] h-[407px]" src={image} alt={title} />
                    </div>
                    <article className="flex flex-col w-1/2 justify-between p-5">
                    <div className="flex flex-col gap-20">
                        <h1 className="font-bold text-4xl text-center whitespace-nowrap text-ellipsis overflow-hidden">{title}</h1>
                        <div className="flex justify-center">
                            <h1 className="text-3xl font-extrabold">{value} <span className="text-xl font-semibold">   pontos</span></h1>
                        </div>
                    </div>
                        <MainButton width="min" onClick={() => setOpenCancelOrderModal(true)} >Cancelar</MainButton>
                        

                    
                    </article>
                </div>
            </div>

            {openCancelOrderModal && (
                <ConfirmCancelModal
                    title={title}
                    orderId={orderId}
                    setOpenOrderCard={setOpenOrderCard}
                    setOpenCancelOrderModal={setOpenCancelOrderModal}
                />
            )}
            
        </div>
    )
};

interface ConfirmCancelModalProps{
    title: string;
    orderId: string | undefined,
    setOpenOrderCard: (e: boolean) => void;
    setOpenCancelOrderModal: (e: boolean) => void;
}

const ConfirmCancelModal = ({
    title,
    orderId,
    setOpenOrderCard,
    setOpenCancelOrderModal,
}: ConfirmCancelModalProps) => {

    async function deleteOrder(){
        await api.delete(`/v3/orders?idOrder=${orderId}`)
        .then(() => {
            console.log("removido com sucesso");
            setOpenCancelOrderModal(false);
            setOpenOrderCard(false);
        })
        .catch((error) => {
            console.log("Deu ruim aqui " + error);
        })
    }

    return(
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50">
            <div className="w-auto h-auto p-5 bg-white rounded-lg gap-10 flex flex-col">
                <div className="flex flex-col gap-3">
                <BackButton onClick={() => setOpenCancelOrderModal(false)} />
                    <h1 className="text-2xl font-medium">Cancelar pedido</h1>
                    <p className="font-medium text-sm text-zinc-600 ml-4">Confirme o cancelamento do pedido</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-center text-xl font-medium">Você tem certeza que deseja cancalar este pedido</h1>
                    <h1 className="text-center">{title} ?</h1>

                    <div className="flex justify-between px-20 mt-5">
                        <button
                            className="font-medium text-zinc-500 hover:text-zinc-600 hover:bg-zinc-200 rounded-md px-5"
                            type="button"
                            onClick={() => setOpenCancelOrderModal(false)}
                        >Voltar
                        </button>
                        <MainButton onClick={deleteOrder} width="min">Cancelar</MainButton>
                    </div>
                </div>
            </div>
        </div>
    )
};