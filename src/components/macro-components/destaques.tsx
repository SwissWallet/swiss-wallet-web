import CamisaBranca from "../../assets/images/camisa-branca.svg"


export function CardDestaques(){
    return(
        <div className="bg-white p-10 w-[1200px] rounded-xl shadow-lg">
            <h3 className="text-4xl font-extrabold flex justify-between mb-8">Destaques - Loja</h3>
            <div className="inline-block">
                <img src={CamisaBranca} alt="camiseta branca com logo do senai" />
                <article className="bg-black text-white p-4 rounded-lg">
                    <h4 className="text-xl font-semibold">Camiseta Destaque</h4>
                    <p className="text-sm font-extralight">Descrição da camiseta destaque</p>
                    <div className="flex justify-between">
                        <h4 className="font-extrabold text-4xl mt-">40<span className="text-sm ml-1">pontos</span></h4>
                        <button className="bg-[#C40601] px-6 py-1 rounded-3xl">ver mais</button>
                    </div>
                </article>
            </div>
        </div>
    )
}