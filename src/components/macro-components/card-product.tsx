import { X } from "lucide-react";
import { MainButton } from "../micro-components/main-button";

interface CardProductProps{
    closeCardProduct: () => void,
    title: string,
    description: string,
    image: string,
    value: number,
}


export function CardProduct({
    closeCardProduct,
    description,
    image,
    title,
    value,
}:CardProductProps){
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-red-gradient rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
                <button className="flex justify-end" onClick={closeCardProduct}><X className="size-6 text-white"/></button>
                <div className="flex">
                    <div className="bg-white rounded-xl shadow-xl w-auto p-5">
                        <img src={image} alt="produto" />
                    </div>
                    <article className="flex flex-col justify-between p-5">
                        <div>
                            <h1 className="text-white font-bold text-2xl">{title}</h1>
                            <h3 className="text-zinc-300">{description}</h3>
                        </div>
                        <div className="text-white">
                            <h1 className="text-6xl font-extrabold">{value}<span className="text-2xl font-semibold">pontos</span></h1>
                        </div>
                        <MainButton width="min">Favoritar</MainButton>
                    </article>
                </div>
            </div>
        </div>
    )
}