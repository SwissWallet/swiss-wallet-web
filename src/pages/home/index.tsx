import { CardFavoritos } from "../../components/macro-components/card-favoritos"
import { Navbar }        from "../../components/macro-components/navbar"
import { CardDestaques } from "../../components/macro-components/destaques"
import { Footer }        from "../../components/macro-components/footer"

export function Home() {
    return (
        <div className="bg-default-gray">
            <Navbar />
            <main className="flex flex-col ml-20 mr-20 mb-20">
                <CardFavoritos />
                <CardDestaques />
                <CardDestaques />
                <CardDestaques />
            </main>
            <Footer />
        </div>
    )
}