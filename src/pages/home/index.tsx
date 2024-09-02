import { useEffect, useState } from "react";
import { CardFavoritos } from "../../components/macro-components/card-favoritos";
import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { api } from "../../lib/axios";
import { SingleProduct } from "../../components/micro-components/single-product-card";

interface productInterface{
    id: string,
    name: string,
    value: number,
    description: string,
    image: string,
    category: string,
}

export function Home() {

    const product = {
        id: "",
        name: "",
        value: "",
        description: "",
        image: "data:image/jpeg;base64,",
        category: "",
    }

    const [ productList, setProductList ] = useState([product])

    useEffect(() => {

        async function getProductsHome(){
            await api.get(`/v3/products/category?category=CANTEEN`)
            .then((json) => {
                const data = json.data;
                setProductList(data.map((item: productInterface) => ({
                    id: item.id,
                    name: item.name,
                    value: item.value,
                    description: item.description,
                    image: `data:image/jpeg;base64,${item.image}`,
                    category: item.category,
                })))
            }
        )}

        getProductsHome();
    }, [])

    return (
        <div className="bg-default-gray">
            <Navbar />
            <main className="flex flex-col ml-20 mr-20 mb-20">
                <CardFavoritos />


            <div className="flex items-center">
                <h3 className="text-4xl font-bold flex justify-between mb-8">Destaques - Loja</h3>
            </div>
            <div className="flex">
                <div className="flex flex-wrap gap-10 justify-center w-[1300px]">
                    {productList.map((product) => (
                        <div key={product.id}>
                            <SingleProduct
                                title={product.name}
                                description={product.description}
                                value={Number(product.value)}
                                image={product.image}
                                textOnButton={'ver mais'}
                            />
                        </div>
                    ))}
                    
                </div>
            </div>

            </main>
            <Footer />
        </div>
    )
}