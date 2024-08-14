import { CardFavoritos } from "../../components/macro-components/card-favoritos"
import {Navbar} from "../../components/macro-components/navbar"

export function Home(){
    return(
        <div>
            <Navbar />
            <CardFavoritos />
        </div>
    )
}