import { CardFavoritos } from "../../components/macro-components/card-favoritos"
import {Navbar} from "../../components/macro-components/navbar"
import {CardDestaques} from "../../components/macro-components/destaques"

export function Home(){
    return(
        <div>
            <Navbar />
            <CardFavoritos />
            <CardDestaques />
        </div>
    )
}