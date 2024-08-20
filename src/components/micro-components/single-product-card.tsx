import CamisaBranca from "../../assets/images/camisa-branca.svg"
import { MainButton } from "../micro-components/main-button"
import { ReactNode } from "react"

interface SingleProductProps {
    textOnButton: ReactNode,
}

export function SingleProduct({
    textOnButton,
}: SingleProductProps) {
    return (
        <div className="flex items-center flex-col bg-white rounded-xl shadow-xl p-6">
            <img src={CamisaBranca} alt="camiseta branca com logo do senai" />
            <article className="bg-black text-white p-4 rounded-lg gap-4 flex flex-col -mt-36">
                <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-semibold">Camiseta Destaque</h4>
                    <p className="text-sm font-extralight">Descrição da camiseta destaque</p>
                </div>
                <div className="flex justify-between gap-10 w-full">
                    <h4 className="font-extrabold text-4xl mt-">40<span className="text-sm ml-1">pontos</span></h4>

                    <MainButton width="min" >
                        {textOnButton}
                    </MainButton>
                </div>
            </article>
        </div>
    )
}