
import { useEffect, useState } from "react";
import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { api } from "../../lib/axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { SingleOrdersProductCard } from "./single-orders-product-card";
import { UnavailableStatus } from "./status-components/unavailable-status";
import { CompletedStatus } from "./status-components/completed-status";
import { WithdrawStatus } from "./status-components/withdraw-status";
import { ProgressStatus } from "./status-components/progress-status";

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
    const [ filterByStatus, setFilterByStatus ] = useState("");

    async function filterProductByStatus(){
        await api.get(`/v3/orders/status?status=${filterByStatus}`)
        .then(() => {console.log("sucessfull")})
        .catch((err) => {console.log(err)})
    };

    useEffect(() => {
        filterProductByStatus();
    }, [filterByStatus]);

    function changedStatusProduct(productId: string, statusAlt: StatusKey) {
        const product = orderProductList.find((product) => product.id === productId);
        if (!product) return;

        const orderId = product.orderId;

        setOrderProductList((prevList) => 
            prevList.map((product) => 
                product.id === productId ? { ...product, status: statusAlt } : product
            )
        );

        api.put(`/v3/orders/change-status?idOrder=${orderId}&status=${statusAlt}`)
        .then(() => {
            console.log("sucessfull")
        })
        .catch((err) => {
            console.log(err)
        })
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
            setOrderProductList(data.map((item: productInterface) => ({
                    id: item.product.id,
                    name: item.product.name,
                    value: item.product.value,
                    description: item.product.description,
                    image: `data:image/jpeg;base64,${item.product.image}`,
                    category: item.product.category,
                    status: item.status
            })));
        })
        .catch(() => {
            console.log("error")
        })
    };

    async function getProductOrderAdmin(){
        await api.get(`/v3/orders`)
        .then((json) => {
            const data = json.data;
            const products = (data.map((item: productInterface) => ({
                orderId: item.id,
                id: item.product.id,
                name: item.product.name,
                value: item.product.value,
                description: item.product.description,
                image: `data:image/jpeg;base64,${item.product.image}`,
                category: item.product.category,
                username: item.user.name,
                status: item.status
            })))
            setOrderProductList(products);
        })
    };

    useEffect(() => {  
        
        if(isClient){
            getProductOrderUser();
        } else {
            getProductOrderAdmin();
        }

    }, [isClient])

    return (
        <div className="bg-default-gray ">
            <Navbar />
            <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">
                
                <div className="flex justify-between">
                    <HeaderOnPages
                        title="Pedidos"
                        description="Confira todos pedidos"
                        notFilterAndOrder={true}
                    />

                    <select className={`bg-transparent focus:outline-none ${isClient ? "hidden" : "block"}`} value={filterByStatus} onChange={(e) => setFilterByStatus(e.target.value)} >
                        <option value="">Selecione</option>
                        <option value="ANALYSIS">Análise</option>
                        <option value="SEPARATED">Retirar</option>
                        <option value="COMPLETED">Completo</option>
                        <option value="UNAVAILABLE">Indisponível</option>
                    </select>
                </div>

                {isClient ? (
                    <div className="grid grid-rows-1 grid-cols-3 gap-20 mb-20">
                            {orderProductList.map((product) => (
                                <div key={product.id}>
                                    <SingleOrdersProductCard
                                        productStatus={product.status}
                                        title={product.name}
                                        description={product.description}
                                        value={Number(product.value)}
                                        image={product.image}
                                        category={product.category}
                                        id={product.id}
                                        statusBars={statusBars} 
                                        selectedStatus={selectedStatus}
                                        setSelectedStatus={setSelectedStatus}
                                        changedStatusProduct={(id, selectedStatus) => changedStatusProduct(id, selectedStatus)}
                                    />
                                </div>
                            ))}
                    </div>
                ) : (
                    <AllProductsOrder
                        changedStatusProduct={changedStatusProduct}
                        orderProductList={orderProductList}
                        selectedStatus={selectedStatus}
                        setSelectedStatus={setSelectedStatus}
                        statusBars={statusBars}
                    />
                )}

            </main>
            <Footer />
        </div>
    )
};

interface AllProductsOrderProps{
    orderProductList: productInterface[];
    statusBars: Record<StatusKey, JSX.Element>;
    selectedStatus: StatusKey;
    setSelectedStatus: (e: StatusKey) => void;
    changedStatusProduct: (id: string, statusAlt: StatusKey) => void;
}

const AllProductsOrder = ({
    orderProductList,
    selectedStatus,
    statusBars,
    setSelectedStatus,
    changedStatusProduct,
}: AllProductsOrderProps) => {
    return(
        <div className="grid grid-rows-1 grid-cols-3 gap-20 mb-20">
        {orderProductList.map((product: productInterface) => (
            <div key={product.id}>
                <SingleOrdersProductCard
                    productStatus={product.status}
                    username={product.username}
                    title={product.name}
                    description={product.description}
                    value={Number(product.value)}
                    image={product.image}
                    category={product.category}
                    id={product.id}
                    statusBars={statusBars}
                    selectedStatus={selectedStatus}
                    setSelectedStatus={setSelectedStatus}
                    changedStatusProduct={(id, selectedStatus) => changedStatusProduct(id, selectedStatus)}
                />
            </div>                                
        ))}
    </div>
    )
};