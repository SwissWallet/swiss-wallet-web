//@ts-nocheck
import { useEffect, useState } from "react";
import { CardFavoritos } from "../../components/macro-components/card-favoritos";
import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { api } from "../../lib/axios";
import { SingleProduct } from "../../components/micro-components/single-product-card";
import { da } from "date-fns/locale";

interface productInterface {
    id: string,
    name: string,
    value: number,
    description: string,
    image: string,
    category: string,
}

export function Home() {


    const [productListStore, setProductListStore] = useState<productInterface[]>([])
    const [productListCanteen, setProductListCanteen] = useState<productInterface[]>([])
    const [productListLibrary, setProductListLibrary] = useState<productInterface[]>([])

    useEffect(() => {

        async function getProductsStore() {
            const token = localStorage.getItem('token');

            await api.get(`/v3/products/category?category=STORE`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
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
        async function getProductsCanteen() {
            const token = localStorage.getItem('token');

            await api.get(`/v3/products/category?category=CANTEEN`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((json) => {
                    const data = json.data;
                    if (data != ""){
                        setProductListCanteen(data.map((item: productInterface) => ({
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
        async function getProductsLibrary() {
            const token = localStorage.getItem('token');

            await api.get(`/v3/products/category?category=LIBRARY`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((json) => {
                    const data = json.data;
                    if (data != ""){
                        setProductListLibrary(data.map((item: productInterface) => ({
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

        getProductsStore();
        getProductsLibrary();
        getProductsCanteen()
    }, [])

    return (
        <div className="bg-default-gray">
            <Navbar />
            <main className="flex flex-col ml-20 mr-20 mb-20">
                <CardFavoritos />

                <div className="bg-white p-10 w-[full] rounded-xl shadow-lg mt-24  ">
                    <div className="flex items-center">
                        <h3 className="text-4xl font-bold flex justify-between mb-8">Destaques - Loja</h3>
                    </div>
                    <div className="flex">
                        <div className="flex flex-wrap lg:flex-row gap-10 justify-center w-[1300px]">
                            {productListStore.slice(0, 3).map((product) => (
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
                        </div>
                    </div>
                </div>
                <div className="bg-white p-10 w-[full] rounded-xl shadow-lg mt-24  ">
                    <div className="flex items-center">
                        <h3 className="text-4xl font-bold flex justify-between mb-8">Destaques - Canteen</h3>
                    </div>
                    <div className="flex">
                        <div className="flex flex-wrap gap-10 justify-center w-[1300px]">
                            {productListCanteen.slice(0, 3).map((product) => (
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
                        </div>
                    </div>
                </div>
                <div className="bg-white p-10 w-[full] rounded-xl shadow-lg mt-24  ">
                    <div className="flex items-center">
                        <h3 className="text-4xl font-bold flex justify-between mb-8">Destaques - Biblioteca</h3>
                    </div>
                    <div className="flex">
                        <div className="flex flex-wrap gap-10 justify-center w-[1300px]">
                            {productListLibrary.slice(0, 3).map((product) => (
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
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}