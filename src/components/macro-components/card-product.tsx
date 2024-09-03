import { X } from "lucide-react";
import camisa from "../../assets/images/camisa-branca.svg";

interface CardProductProps{
    closeCardProduct: () => void,
}


export function CardProduct({
    closeCardProduct,
}:CardProductProps){
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-red-gradient rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
                <button className="flex justify-end" onClick={closeCardProduct}><X className="size-6 text-white"/></button>
                <div>
                    <div className="bg-white rounded-xl shadow-xl w-auto p-5">
                        <img src={camisa} alt="produto" />
                    </div>
                    <article>
                        
                    </article>
                </div>
            </div>
        </div>
    )
}