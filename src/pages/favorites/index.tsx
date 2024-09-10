//@ts-nocheck
import { Navbar } from "../../components/macro-components/navbar";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { SingleProduct } from "../../components/micro-components/single-product-card";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface productInterface{
    id: string,
    name: string,
    value: number,
    description: string,
    image: string,
    category: string,
}
export function Favorites() {
    const [ productListFavorite, setProductListFavorite ] = useState<productInterface[]>([]);

    useEffect(() => {

        async function getProductsFavorites(){
            const token = localStorage.getItem('token');

            await api.get(`/v3/favorites/current`, {
                headers: {
                    'Authorization' : `Bearer ${token}`
                }
            })
            .then((json) => {
                const data = json.data;
                setProductListFavorite(data.map((item: productInterface) => ({
                    id: item.product.id,
                    name: item.product.name,
                    value: item.product.value,
                    description: item.product.description,
                    image: `data:image/jpeg;base64,${item.product.image}`,
                    category: item.product.category,
                })))
            }
        )}
        getProductsFavorites()
        }, []);

    return (
        <div>
            <Navbar />
            <main className="ml-20 mr-20 justify-between flex flex-col gap-20 mt-20">
                <HeaderOnPages
                    title="Favoritos"
                    description="Confira sua lista de favoritos"
                />


                <section className="grid grid-rows-1 grid-cols-3 gap-20 mb-20">

                {productListFavorite.lenght > 0 && productListFavorite.map((product) => (
                            <div key={product.id}>
                                <SingleProduct
                                    title={product.name}
                                    description={product.description}
                                    value={Number(product.value)}
                                    image={product.image}
                                    textOnButton={"Desfavoritar"}
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