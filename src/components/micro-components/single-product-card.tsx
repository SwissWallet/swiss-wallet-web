import { CardProduct } from "../macro-components/card-product";
import { MainButton } from "../micro-components/main-button"
import { ReactNode, useState } from "react"

interface SingleProductProps {
    textOnButton: ReactNode,
    title: string,
    description: string,
    image: string,
    value: number,
}

export function SingleProduct({
    textOnButton,
    title,
    description,
    image,
    value,
}: SingleProductProps) {

    const [ openCard, setOpenCard ] = useState(false);

    function openCardProduct(){
        setOpenCard(true);
    }

    function closeCardProduct(){
        setOpenCard(false);
    }

    return (
        <>
            <div className="flex items-center flex-col bg-white rounded-xl shadow-xl p-6">
                <img className="w-[309px] h-[407px]" src={image} alt="Produto não existe" />
                <article className="bg-black text-white p-4 rounded-lg gap-4 flex flex-col -mt-36">
                    <div className="flex flex-col gap-1">
                        <h4 className="text-xl font-semibold">{title}</h4>
                        <p className="text-sm font-extralight">{description}</p>
                    </div>
                    <div className="flex justify-between gap-10 w-full">
                        <h4 className="font-extrabold text-4xl mt-">{value}<span className="text-sm ml-1">pontos</span></h4>

                        <MainButton onClick={openCardProduct} width="min" >
                            {textOnButton}
                        </MainButton>
                    </div>
                </article>
            </div>

            {openCard && (
                <CardProduct 
                    closeCardProduct={closeCardProduct}
                    image={image}
                    title={title}
                    value={value}    
                    description={description}
                
                />
            )}
        </>
    )
}