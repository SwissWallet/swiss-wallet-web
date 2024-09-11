import { ReactNode } from "react";
import { MainButton } from "../../components/micro-components/main-button";

interface SingleOrdersProductCardProps {
    status: ReactNode,
    title: string,
    description: string,
    image: string,
    value: number,
    id: string,
    category: string,
    username: string | undefined,
    setOpenOrderCard: (e: boolean) => void;
}

export function SingleOrdersProductCard({
    status,
    description,
    image,
    title,
    username,
    setOpenOrderCard
}: SingleOrdersProductCardProps) {

    



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

        
        </div>
    )
}