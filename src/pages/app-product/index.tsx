import AddNewProduct from '../../components/macro-components/addproduct'
import { Footer } from '../../components/macro-components/footer'
import { Navbar } from '../../components/macro-components/navbar'

export default function AddProductPage() {
    return (
        <>
            <Navbar />
            <AddNewProduct />
            <Footer />
        </>
    )
}