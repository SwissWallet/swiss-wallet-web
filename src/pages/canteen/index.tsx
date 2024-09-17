import { Navbar } from "../../components/macro-components/navbar";
import { Footer } from "../../components/macro-components/footer";
import { SingleProduct } from "../../components/micro-components/single-product-card";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface productInterface {
    id: string,
    name: string,
    value: number,
    description: string,
    image: string,
    category: string,
}

export function Canteen() {

    const product = {
        id: "",
        name: "",
        value: "",
        description: "",
        image: "data:image/jpeg;base64,",
        category: "",
    }

    const [productListCanteen, setProductListCanteen] = useState([]);

    useEffect(() => {
        async function getProductsCanteen() {
            await api.get(`/v3/products/category?category=CANTEEN`)
                .then((json) => {
                    const data = json.data;
                    setProductListCanteen(data.map((item: productInterface) => ({
                        id: item.id,
                        name: item.name,
                        value: item.value,
                        description: item.description,
                        image: `data:image/jpeg;base64,${item.image}`,
                        category: item.category,
                    })))
                }
                )
        }

        getProductsCanteen();
    }, []);

    return (
        <div>
            <Navbar />
            <main className="ml-20 mr-20 justify-between flex flex-col gap-20 mt-20">

                <HeaderOnPages
                    title="Cantina"
                    description="Confira os lanches disponíveis"
                />

                <section className="grid grid-rows-1 grid-cols-3 gap-20 mb-20">

                    {productListCanteen.map((product) => (
                        <div key={product.id}>
                            <SingleProduct
                                title={product.name}
                                description={product.description}
                                value={Number(product.value)}
                                image={product.image}
                                textOnButton={'ver mais'}
                                category={product.category}
                                id={product.id}
                            />
                        </div>
                    ))}

                </section>
            </main>
            <Footer />
        </div>
    )
}