import { useEffect, useState } from "react";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { api } from "../../lib/axios";
import { ShoppingCard } from "./shooping-card";

interface product{
    id: string;
    date: string;
    name: string;
    value: number;
    status?: string
    productName: string[];
}

export function ShoppingPage(){

    const [ listProduct, setListProduct ] = useState<product[]>([]);

    useEffect(() => {
        async function getShoppingCart(){
            api.get(`/v3/order/carts/current`)
            .then((json) =>{
                const data = json.data;
                if(data != ""){
                    setListProduct(data.map((item: product) => ({
                        id: item.id,
                        date: item.dateTime,
                        name: item.user.name,
                        status: item.status,
                        productName: item.product.map((productItem) => productItem.name), // se houver apenas um produto
                        value: item.value || 0,

                    })))
                };
            })
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

                <>
                    {listProduct.length > 0 && (
                        listProduct.map((item) => (
                            <div className="flex flex-col gap-6" key={item.id}>
                                <ShoppingCard
                                    dateTime={item.date}
                                    productName={item.productName}
                                    status={item.status === "PAID" ? ("PAGO") : ("PENDENTE")}
                                    value={item.value}
                                />
                            </div>
                        ))
                    )}
                </>
                
            </main>
            <Footer />
        </div>
    )
};