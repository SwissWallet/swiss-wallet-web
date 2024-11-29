//@ts-nocheck
import { useEffect, useState } from "react";
import { CardFavoritos } from "../../components/macro-components/card-favoritos";
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

export function Home() {
    const [productListStore, setProductListStore] = useState<productInterface[]>([]);
    const [productListCanteen, setProductListCanteen] = useState<productInterface[]>([]);
    const [productListLibrary, setProductListLibrary] = useState<productInterface[]>([]);

    useEffect(() => {
        async function getProductsStore() {
            const token = localStorage.getItem('token');
            const response = await api.get(`/v3/products/category?category=STORE`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setProductListStore(response.data.map((item: productInterface) => ({
                ...item,
                image: `data:image/jpeg;base64,${item.image}`
            })));
        }

        async function getProductsCanteen() {
            const token = localStorage.getItem('token');
            const response = await api.get(`/v3/products/category?category=CANTEEN`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setProductListCanteen(response.data.map((item: productInterface) => ({
                ...item,
                image: `data:image/jpeg;base64,${item.image}`
            })));
        }

        async function getProductsLibrary() {
            const token = localStorage.getItem('token');
            const response = await api.get(`/v3/products/category?category=LIBRARY`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setProductListLibrary(response.data.map((item: productInterface) => ({
                ...item,
                image: `data:image/jpeg;base64,${item.image}`
            })));
        }

        getProductsStore();
        getProductsLibrary();
        getProductsCanteen();
    }, []);

    return (
        <div className="bg-default-gray min-h-screen">
            <Navbar />
            <main className="flex flex-col px-4 lg:px-20 mb-20">
                <CardFavoritos />

                {[{
                    title: "Destaques - Loja",
                    products: productListStore
                }, {
                    title: "Destaques - Canteen",
                    products: productListCanteen
                }, {
                    title: "Destaques - Biblioteca",
                    products: productListLibrary
                }].map((section, index) => (
                    <div key={index} className="bg-white p-6 sm:p-10 rounded-xl shadow-lg mt-12">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                            {section.title}
                        </h3>
                        <div className="flex flex-wrap gap-6 justify-center">
                            {section.products.slice(0, 3).map((product) => (
                                <SingleProduct
                                    key={product.id}
                                    title={product.name}
                                    description={product.description}
                                    value={Number(product.value)}
                                    image={product.image}
                                    textOnButton="ver mais"
                                    category={product.category}
                                    id={product.id}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </main>
            <Footer />
        </div>
    );
}
