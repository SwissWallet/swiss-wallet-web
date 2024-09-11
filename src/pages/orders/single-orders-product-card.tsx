import { ReactNode, useState } from "react";
import { MainButton } from "../../components/micro-components/main-button";
import { OrderCardProduct } from "./order-card-product";
import { StatusKey } from ".";

interface SingleOrdersProductCardProps {
    title: string,
    description: string,
    image: string,
    value: number,
    id: string,
    category: string,
    username: string | undefined,
    selectedStatus: StatusKey,
    setSelectedStatus: (e: StatusKey) => void,
    statusBars: Record<StatusKey, JSX.Element>,
    status?: ReactNode,
};


export function SingleOrdersProductCard({
    description,
    image,
    title,
    username,
    value,
    selectedStatus,
    setSelectedStatus,
    statusBars,
    status
}: SingleOrdersProductCardProps) {

    const [ openOrderCard, setOpenOrderCard ] = useState(false);

    console.log(selectedStatus)

    return (
        <div className="flex items-center flex-col box-border gap-3">
            <span className="font-medium text-lg">de: {username}</span>
            <img src={image} alt="camiseta branca com logo do senai" />
            <article className="bg-black text-white px-4 py-8 rounded-lg gap-4 h-[216px] flex flex-col -mt-36">
                <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-semibold">{title}</h4>
                    <p className="text-sm font-extralight">{description}</p>
                </div>
                {status}
            <MainButton onClick={() => setOpenOrderCard(true)} width="min">Selecionar</MainButton>
            </article>
            {openOrderCard && (
                <OrderCardProduct  
                    status={statusBars[selectedStatus]}
                    title={title}
                    value={value}
                    image={image}
                    setOpenOrderCard={setOpenOrderCard}
                    setSelectedStatus={setSelectedStatus}
                />
            )}
        
        </div>
    )
}