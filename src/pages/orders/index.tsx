//@ts-nocheck
import { useEffect, useState } from "react";
import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { api } from "../../lib/axios";
import { SingleProduct } from "../../components/micro-components/single-product-card";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { SingleOrdersProductCard } from "./single-orders-product-card";
import { InProgress } from "./in-progress-status";
import { WithdrawOrder } from "./withdraw-order-status";
import { UnavailableStatus } from "./unavailable-status";
import { CompletedStatus } from "./completed-status";

interface productInterface {
    id: string,
    name: string,
    value: number,
    description: string,
    image: string,
    category: string,
    username?: string,
};

export type StatusKey = 'progress' | 'withdraw' | 'unavailable' | 'completed';

export function Orders() {

    const user = useSelector((state: RootState) => state.authUser.value);

    const [ orderProductList, setOrderProductList ] = useState<productInterface[]>([]);
    const [ selectedStatus, setSelectedStatus ] = useState<StatusKey>('progress');

    
    const statusBars: Record<StatusKey, JSX.Element> = {
        progress: <InProgress />,
        withdraw: <WithdrawOrder />,
        unavailable: <UnavailableStatus />,
        completed: <CompletedStatus />,
    };

    const role = user.user.role;
    const isClient = role === "ROLE_CLIENT";

    async function getProductOrderUser(){
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

    async function getProductOrderAdmin(){
        await api.get(`/v3/orders`)
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
                username: item.user.name
            })))
        })
    };

    useEffect(() => {  
        
        if(isClient){
            getProductOrderUser();
        } else {
            getProductOrderAdmin();
        }

    }, [])

    return (
        <div className="bg-default-gray ">
            <Navbar />
            <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">

                <HeaderOnPages
                    title="Pedidos"
                    description="Confira todos pedidos"
                />

                {isClient ? (
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
                ) : (
                    <div className="grid grid-rows-1 grid-cols-3 gap-20 mb-20">
                            {orderProductList.map((product) => (
                                    <div key={product.id}>
                                        <SingleOrdersProductCard
                                            username={product.username}
                                            title={product.name}
                                            description={product.description}
                                            value={Number(product.value)}
                                            image={product.image}
                                            category={product.category}
                                            id={product.id}
                                            statusBars={statusBars}
                                            status={statusBars[selectedStatus]}
                                            selectedStatus={selectedStatus}
                                            setSelectedStatus={setSelectedStatus}
                                        />

                                        
                                    </div>                                
                            ))}
                    </div>
                )}

            </main>
            <Footer />
        </div>
    )
}