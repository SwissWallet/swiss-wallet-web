import { Navbar } from "../../components/macro-components/navbar";
import { Footer } from "../../components/macro-components/footer";
import { SingleProduct } from "../../components/micro-components/single-product-card";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { NoProducts } from "../../components/micro-components/no-products";

interface productInterface {
    id: string,
    name: string,
    value: number,
    description: string,
    image: string,
    category: string,
}

export function Store() {

    const [productListStore, setProductListStore] = useState<productInterface[]>([])

    useEffect(() => {
        async function getProductsStore() {
            await api.get(`/v3/products/category?category=STORE`)
                .then((json) => {
                    const data = json.data;
                    if (data != ""){
                        setProductListStore(data.map((item: productInterface) => ({
                            id: item.id,
                            name: item.name,
                            value: item.value,
                            description: item.description,
                            image: `data:image/jpeg;base64,${item.image}`,
                            category: item.category,
                        })))
                    }  
                }
                )
        }
        getProductsStore()
    }, [])

    return (
        <div>
            <Navbar />
            <main className="ml-20 mr-20 justify-between flex flex-col gap-20 mt-20">
                <HeaderOnPages
                    title="Loja"
                    description="Confira nossas melhores opções de camisetas"
                    notFilterAndOrder={true}
                />
                <section className="grid grid-rows-1 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-20 mb-20">
                    {productListStore.length > 0 ? (
                        productListStore.map((product) => (
                                <div key={product.id}>
                                    <SingleProduct
                                        title={product.name}
                                        description={product.description}
                                        value={Number(product.value)}
                                        image={product.image}
                                        category={product.category}
                                        id={product.id}
                                        textOnButton={'ver mais'}
                                    />
                                </div>
                        ))
                        ) : (
                            <NoProducts />
                        )
                    }
                </section>
            </main>
            <Footer />
        </div>
    )
}