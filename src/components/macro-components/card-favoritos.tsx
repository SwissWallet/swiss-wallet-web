import { ChevronRight, Heart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";

export function CardFavoritos() {

    const user = useSelector((state: RootState) => state.authUser.value);
    const role = user.user.role

    const isClient = role === "ROLE_CLIENT";

    return (
        <div className="flex flex-wrap justify-around mt-24 gap-24">
            <article className="bg-white text-black p-8 w-[600px] font-bold rounded-xl shadow-lg hover:scale-105 transition-transform duration-150 cursor-pointer">
                <div className="flex items-center gap-3">
                    <Heart />
                    <h3 className="font-bold text-2xl">AAPM</h3>
                </div>
                <p className="font-medium">apoie na gestão da escola no alcance de suas metas e promoção a integração escola-comunidade.</p>
            </article>
            <Link to={'/favorites'} className={` ${isClient ? "block" : "hidden"} bg-white text-black p-8 w-[600px] font-bold rounded-xl shadow-lg hover:scale-105 transition-transform duration-150 cursor-pointer`}>
                <img src="" alt="" />
                <h3 className="font-bold text-2xl">Favoritos</h3>
                <div className="flex items-center justify-between">
                    <p className="font-medium">Acessar os favoritos</p>
                    <ChevronRight />
                </div>
            </Link>

        </div>
    )
}