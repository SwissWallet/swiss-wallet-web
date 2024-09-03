import CardPoint from "../../components/macro-components/card-points"
import { Navbar } from "../../components/macro-components/navbar"
import { Footer } from "../../components/macro-components/footer"
import AddNewProduct from "../../components/macro-components/addproduct"


export default function CardPointPage() {
    return (
        <>
            <Navbar />
            <CardPoint />
            <Footer />
            <AddNewProduct />
        </>
    )
}