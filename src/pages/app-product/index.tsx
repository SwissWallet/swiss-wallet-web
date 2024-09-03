import {Navbar} from '../../components/macro-components/navbar'
import {Footer} from '../../components/macro-components/footer'
import AddNewProduct from '../../components/macro-components/addproduct'

export default function AddProduct(){
    return(
        <>
            <Navbar />
            <AddNewProduct />
            <Footer />
        </>
    )
}