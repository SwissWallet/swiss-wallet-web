import { AddNewProduct } from '../../components/macro-components/addproduct'
import { Footer } from '../../components/macro-components/footer'
import { Navbar } from '../../components/macro-components/navbar'

export default function AddProductPage() {
    return (
        <>
            <Navbar />
            <main className='mr-20 ml-20'>
                <AddNewProduct />
            </main>
            <Footer />
        </>
    )
}