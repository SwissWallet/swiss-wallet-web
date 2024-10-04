import { useEffect } from "react";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { api } from "../../lib/axios";

export function ShoppingPage(){

    useEffect(() => {
        async function getShoppingCart(){
            api.get(`/v3/order/carts/current`)
            .then((json) => console.log(json))
            .catch((err) => console.log(err))
        };

        getShoppingCart();
    }, [])

    return(
        <div className="bg-default-gray">
            <Navbar />
            <main className="flex flex-col ml-20 mr-20 mb-20 mt-20 gap-20">
                <HeaderOnPages
                    title="Compras"
                    description="Lista de compras"
                    notFilterAndOrder={true}
                />

                
            </main>
            <Footer />
        </div>
    )
};