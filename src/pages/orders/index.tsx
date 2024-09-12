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
import { UnavailableStatus } from "./unavailable-status";
import { CompletedStatus } from "./completed-status";
import { WithdrawStatus } from "./withdraw-status";
import { ProgressStatus } from "./progress-status";

interface productInterface {
    id: string,
    name: string,
    value: number,
    description: string,
    image: string,
    category: string,
    username?: string,
    status: StatusKey,
};

export type StatusKey = 'ANALYSIS' | 'SEPARATED' | 'UNAVAILABLE' | 'COMPLETED';

export function Orders() {

    const user = useSelector((state: RootState) => state.authUser.value);

    const [ orderProductList, setOrderProductList ] = useState<productInterface[]>([]);
    const [ selectedStatus, setSelectedStatus ] = useState<StatusKey>('ANALYSIS');

    function changedStatusProduct(productId: string, statusAlt: StatusKey) {
        setOrderProductList((prevList) => 
            prevList.map((product) => 
                product.id === productId ? { ...product, status: statusAlt } : product
            )
        );
        console.log("id: " + productId);
        console.log("status: " + statusAlt);
    };

    
    const statusBars: Record<StatusKey, JSX.Element> = {
        ANALYSIS: <ProgressStatus />,
        SEPARATED: <WithdrawStatus />,
        UNAVAILABLE: <UnavailableStatus />,
        COMPLETED: <CompletedStatus />,
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
                    status: item.status
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
                username: item.user.name,
                status: item.status
            })))
        })

        console.log("lista atual \n");
        console.log(orderProductList);
    };

    useEffect(() => {  
        
        if(isClient){
            getProductOrderUser();
        } else {
            getProductOrderAdmin();
        }

    }, [])

    useEffect(() => {
        console.log(selectedStatus)
    },[selectedStatus])



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
                                            changedStatusProduct={(id, selectedStatus) => changedStatusProduct(id, selectedStatus)}
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