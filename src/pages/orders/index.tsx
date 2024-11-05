import { useEffect, useState } from "react";
import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { api } from "../../lib/axios";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { SingleOrdersProductCard } from "./single-orders-product-card";
import { DrawerPurchase } from "../../components/macro-components/drawer-purchase";
import { NoProducts } from "../../components/micro-components/no-products";

interface productInterface {
    orderId: string
    id: string,
    name: string,
    value: number,
    description: string,
    image: string,
    category: string,
    username?: string,
};

export interface CheckProduts{
    id: string;
    title: string;
    value: number;
};

export function Orders() {


    const [ orderProductList, setOrderProductList ] = useState<productInterface[]>([]);

    async function getProductOrderUser(){
        await api.get(`/v3/orders/current`)
        .then((json) => {
            const data = json.data;
            if (data != ""){
                setOrderProductList(data.map((item: productInterface) => ({
                        orderId: item.id,
                        id: item.product.id,
                        name: item.product.name,
                        value: item.product.value,
                        description: item.product.description,
                        image: `data:image/jpeg;base64,${item.product.image}`,
                        category: item.product.category,
                        status: item.status
                })));
            }  
        })
        .catch((err) => {
            console.log("error: \n", err)
        })
    };
    
    useEffect(() => {  
        getProductOrderUser();
    }, []);

    const [selectedProducts, setSelectedProducts] = useState<CheckProduts[]>([]);
    const [ openDrawerBuy, setOpenDrawerBuy ] = useState(false);

    function handdleSelectedProducts(isSelect: boolean, id: string, title: string, value: number) {
        setSelectedProducts((prevProducts) => {
            if (isSelect) {
                return [...prevProducts, { id, title, value }];
            } else {
                return prevProducts.filter((product) => product.id !== id);
            }
        });
    };
    
    useEffect(() => {
        if (selectedProducts.length > 0) {
          setOpenDrawerBuy(true);
        } else {
          setOpenDrawerBuy(false);
        }
      }, [selectedProducts]);

    return (
        <div className="bg-default-gray ">
            <Navbar />
            <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">
                
                <HeaderOnPages
                    title="Pedidos"
                    description="Confira todos pedidos"
                    notFilterAndOrder={true}
                />
                        {orderProductList.length > 0 ? (
                            <div className="grid grid-rows-1 grid-cols-3 gap-20 mb-20">
                                {orderProductList.map((product) => (
                                    <div key={product.id}>
                                        <SingleOrdersProductCard
                                            orderId={product.orderId}
                                            title={product.name}
                                            description={product.description}
                                            value={Number(product.value)}
                                            image={product.image}
                                            category={product.category}
                                            id={product.id}
                                            handdleSelectProducts={handdleSelectedProducts}
                                            selectedProducts={selectedProducts}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex justify-center items-center">
                                <NoProducts />
                            </div>
                        )}
            </main>
            <Footer />

            {openDrawerBuy && (
                <DrawerPurchase
                    openDrawerBuy={openDrawerBuy}
                    setOpenDrawerBuy={setOpenDrawerBuy}
                    selectedProducts={selectedProducts}
                />
            )}
        </div>
    )
};