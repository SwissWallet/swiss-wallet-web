import { CardFavoritos } from "../../components/macro-components/card-favoritos"
import {Navbar} from "../../components/macro-components/navbar"
import {CardDestaques} from "../../components/macro-components/destaques"
import {Footer} from "../../components/macro-components/footer"

export function Home(){
    return(
        <div>
            <Navbar />
            <CardFavoritos />
            <CardDestaques />
            <Footer />
        </div>
    )
}