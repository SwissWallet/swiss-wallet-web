import { ReactNode } from "react"
import CamisaBranca from "../../assets/images/camisa-branca.svg"

interface SingleOrdersProductCardProps {
    status: ReactNode,
}

export function SingleOrdersProductCard({
    status,
}: SingleOrdersProductCardProps) {
    return (
        <div className="flex items-center flex-col">
            <img src={CamisaBranca} alt="camiseta branca com logo do senai" />
            <article className="bg-black text-white p-4 rounded-lg gap-4 h-[216px] flex flex-col -mt-36">
                <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-semibold">Camiseta Destaque</h4>
                    <p className="text-sm font-extralight">Descrição da camiseta destaque</p>
                </div>
                {status}
            </article>
        </div>
    )
}