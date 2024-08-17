import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { InProgress } from "./in-progress-status";
import { SingleOrdersProductCard } from "./single-orders-product-card";

export function Orders(){
    return(
        <div className="bg-default-gray ">

            <Navbar/>

            <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">

                <SingleOrdersProductCard status={<InProgress/>}/>

            </main>

            <Footer />

        </div>
    )
}