import CamisaBranca from "../../assets/images/camisa-branca.svg"

export function SingleFavoriteProductCard(){
    return(
        <div className="flex items-center flex-col">
            <img src={CamisaBranca} alt="camiseta branca com logo do senai" />
            <article className="bg-black text-white p-4 rounded-lg gap-4 flex flex-col -mt-36">
                <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-semibold">Camiseta Destaque</h4>
                    <p className="text-sm font-extralight">Descrição da camiseta destaque</p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="bg-yellow-500 rounded-full h-8 w-8"></div>
                    <div className="bg-yellow-500 h-[2px] w-12"></div>
                    <div className="bg-dark-gray rounded-full h-8 w-8"></div>
                    <div className="bg-dark-gray h-[2px] w-12"></div>
                    <div className="bg-dark-gray rounded-full h-8 w-8"></div>
                    
                    
                </div>
            </article>
        </div>
    )
}