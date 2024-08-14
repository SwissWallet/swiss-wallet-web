import { CiHeart } from "react-icons/ci"
import { IoIosArrowForward } from "react-icons/io";


export function CardFavoritos(){
    return(
        <div className="flex justify-around pt-24">
            <article className="bg-white text-black p-10 w-[600px] font-bold rounded-xl shadow-lg hover:scale-105 transition-transform duration-150 cursor-pointer">
                <div className="flex items-center gap-3">
                    <CiHeart />
                    <h3 className="font-bold text-2xl">AAPM</h3>
                </div>
                    <p className="font-medium">apoie na gestão da escola no alcance de suas metas e promoção a integração escola-comunidade.</p>
            </article>
            <article className="bg-white text-black p-10 w-[600px] font-bold rounded-xl shadow-lg hover:scale-105 transition-transform duration-150 cursor-pointer">
                <img src="" alt="" />
                <h3 className="font-bold text-2xl">Favoritos</h3>
                    <div className="flex items-center justify-between">
                        <p className="font-medium">Acessar os favoritos</p>
                        <IoIosArrowForward />
                    </div>
            </article>
        </div>
    )
}