//@ts-nocheck
import { useEffect, useState } from "react";
import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { api } from "../../lib/axios";
import { SingleProduct } from "../../components/micro-components/single-product-card";

interface productInterface {
    id: string,
    name: string,
    value: number,
    description: string,
    image: string,
    category: string,
}

export function Orders() {

    const [ orderProductList, setOrderProductList ] = useState<productInterface[]>([]);

    async function getProductOrder(){
        await api.get(`/v3/orders/current`)
        .then((json) => {
            const data = json.data;
            console.log(data)
            setOrderProductList(data.map((item: productInterface) => ({
                    id: item.product.id,
                    name: item.product.name,
                    value: item.product.value,
                    description: item.product.description,
                    image: `data:image/jpeg;base64,${item.product.image}`,
                    category: item.product.category,
            })))
        })
        .catch(() => {
            console.log("error")
        })
    };

    useEffect(() => {
        getProductOrder();
    }, [])

    return (
        <div className="bg-default-gray ">
            <Navbar />
            <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">

                <div className="grid grid-rows-1 grid-cols-3 gap-20 mb-20">
                        {orderProductList.map((product) => (
                            <div key={product.id}>
                                <SingleProduct
                                    title={product.name}
                                    description={product.description}
                                    value={Number(product.value)}
                                    image={product.image}
                                    textOnButton={"Remover"}
                                    category={product.category}
                                    id={product.id}
                                />
                            </div>
                        ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}