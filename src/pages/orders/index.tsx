import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { SingleFavoriteProductCard } from "./single-favorite-product-card";

export function Orders(){
    return(
        <div className="bg-default-gray ">

            <Navbar/>

            <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">

                <SingleFavoriteProductCard />

            </main>

            <Footer />

        </div>
    )
}