import { useEffect, useState } from "react";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { CardPayment } from "./payment-card";
import { api } from "../../lib/axios";

interface product{
    id: string;
    date: string;
    name: string;
    value: number;
    status?: string
    productName: string;
}

export function PaymentAdmin(){

    const [ listProducts, setListProducts ] = useState<product[]>([]);

    useEffect(() => {
        async function getCardProducts(){
            await api.get(`/v3/order/carts`)
            .then((json) => {
                const data = json.data;
                if(data != ""){
                    setListProducts(data.map((item: product) => ({
                        id: item.id,
                        date: item.dateTime,
                        name: item.user.name,
                        status: item.user.role,
                        productName: item.product[0]?.name || "N/A", // se houver apenas um produto
                        value: item.product[0]?.value || 0,

                    })))
                };
                    
            })
            .catch((err) => {
                console.log(err)
            })
        };
        
        getCardProducts();
    },[]);

    console.log(listProducts)

    return(
        <div className="bg-default-gray">
            <Navbar />
            <main className="flex flex-col ml-20 mr-20 mb-20 mt-20 gap-20">
                <HeaderOnPages
                    title="Lista de Pagamentos"
                    description="Lista de pedidos e pagamentos dos usuários"
                    notFilterAndOrder={true}
                />
                <div className="w-full flex justify-center items-center">
                    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <CardPayment />
                        <CardPayment />
                        <CardPayment />
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};