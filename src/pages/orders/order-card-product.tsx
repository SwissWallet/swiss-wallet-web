import { ReactNode, useState } from "react";
import { MainButton } from "../../components/micro-components/main-button";
import { ChangedStatusModal } from "./changed-status-modal";
import { StatusKey } from ".";
import { BackButton } from "../../components/micro-components/back-button";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { api } from "../../lib/axios";
import { Plus, ShoppingCart } from "lucide-react";

interface OrderCardProductProps{
    title: string,
    image: string,
    id: string;
    value: number,
    category?: string,
    status?: ReactNode,
    setOpenOrderCard: (e: boolean) => void,
    setSelectedStatus: (e: StatusKey) => void,
    changedStatusProduct: (id: string , statusAlt: StatusKey) => void,
    statusBars: Record<StatusKey, JSX.Element>,
    productStatus: StatusKey,
    orderId: string | undefined;
}

export function OrderCardProduct({
    image,
    setOpenOrderCard,
    setSelectedStatus,
    id,
    statusBars,
    productStatus,
    title,
    value,
    changedStatusProduct,
    orderId,
}: OrderCardProductProps){

    const [ openStatusModal, setOpenStatusModal ] = useState(false);
    const [ openCancelOrderModal, setOpenCancelOrderModal ] = useState(false);

    const user = useSelector((state: RootState) => state.authUser.value);

    const role = user.user.role;
    const isClient = role === "ROLE_CLIENT";

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
            <div className="flex">
                    <div className="bg-white rounded-xl shadow-xl p-5 gap-2 flex flex-col">
                        <BackButton type="button" onClick={() => setOpenOrderCard(false)}/>
                        <img className="w-[309px] h-[407px]" src={image} alt="produto" />
                    </div>
                    <article className="flex flex-col w-1/2 justify-between p-5">
                    <div className="flex flex-col gap-20">
                        <h1 className="font-bold text-4xl text-center whitespace-nowrap text-ellipsis overflow-hidden">{title}</h1>
                        <div className="flex justify-center">
                            <h1 className="text-3xl font-extrabold">{value} <span className="text-xl font-semibold">   pontos</span></h1>
                        </div>
                    </div>
                        {statusBars[productStatus]}

                        {isClient ? (
                            <MainButton width="min" onClick={() => setOpenCancelOrderModal(true)} >Cancelar</MainButton>
                        ) : (
                            <div className="flex flex-col justify-center gap-2">
                                <MainButton width="min" onClick={() => setOpenStatusModal(true)}>Status</MainButton>
                                <MainButton width="min" onClick={() => setOpenStatusModal(true)}>
                                    <div className="flex justify-between box-content px-2">
                                        <ShoppingCart /> Comprar
                                    </div>
                                </MainButton>
                            </div>
                        )}

                    
                    </article>
                </div>
            </div>
            {openStatusModal && (
                <ChangedStatusModal 
                    id={id}
                    setSelectedStatus={setSelectedStatus} 
                    setOpenStatusModal={setOpenStatusModal}
                    setOpenOrderCard={setOpenOrderCard}
                    changedStatusProduct={(id , selectedStatus) => changedStatusProduct(id, selectedStatus)}
                />
            )}

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