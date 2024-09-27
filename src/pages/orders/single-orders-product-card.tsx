    import { useEffect, useState } from "react";
    import { MainButton } from "../../components/micro-components/main-button";
    import { OrderCardProduct } from "./order-card-product";
    import { StatusKey } from ".";
    import { useSelector } from "react-redux";
    import { RootState } from "../../store";
    import { Checkbox } from "../../components/micro-components/checkbox";
    import { DrawerPurchase } from "../../components/macro-components/drawer-purchase";

    interface SingleOrdersProductCardProps {
        title: string,
        description: string,
        image: string,
        value: number,
        id: string,
        orderId?: string,
        category: string,
        username?: string | undefined,
        selectedStatus: StatusKey,
        setSelectedStatus: (e: StatusKey) => void,
        statusBars: Record<StatusKey, JSX.Element>,
        productStatus: StatusKey,
        changedStatusProduct: (id: string, statusAlt: StatusKey) => void,
    };
    interface CheckProduts{
        id: string;
        title: string;
        value: number;
    };

    export function SingleOrdersProductCard({
        description,
        image,
        title,
        username,
        value,
        selectedStatus,
        setSelectedStatus,
        statusBars,
        productStatus,
        changedStatusProduct,
        id,
        orderId
    }: SingleOrdersProductCardProps) {

        const [ openOrderCard, setOpenOrderCard ] = useState(false);
        const [ openDrawerBuy, setOpenDrawerBuy ] = useState(false);

        const user = useSelector((state: RootState) => state.authUser.value);

        const role = user.user.role;
        const isClient = role === "ROLE_CLIENT";

        // Dentro do seu componente:
const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

function handdleSelectedProducts(isSelect: boolean) {
        if (isSelect) {
            // Atualiza o estado usando a função de atualização do estado
            setSelectedProducts((prevProducts) => [...prevProducts, { id, title, value }]);
            console.log(selectedProducts); // Isso pode mostrar o valor antigo, use um useEffect para ver as mudanças
        } else {
            setSelectedProducts((prevProducts) => 
                prevProducts.filter(product => product.id !== id)
            );
        }
    }


        useEffect(() => {
            if (selectedProducts.length > 0) {
              setOpenDrawerBuy(true);
            } else {
              setOpenDrawerBuy(false);
            }
          }, [selectedProducts]);
        
        return (
            <div className="flex">
                <div className={`${isClient ? "block" : "hidden"}`}>
                    <Checkbox 
                        handleSelectProduct={handdleSelectedProducts}
                    />
                </div>
                <div className="flex items-center flex-col box-border gap-10">
                    <span className={`font-medium text-lg ${isClient ? "hidden" : "block"}`}>de: {username}</span>
                    <img src={image} className="w-[309px] h-[407px]" alt="camiseta branca com logo do senai" />
                    <article className="bg-black text-white p-4 rounded-lg gap-4 flex flex-col md:w-[320px] -mt-36 px-10">
                        <div className="flex flex-col gap-1 text-center ">
                            <h4 className="text-xl font-semibold whitespace-nowrap text-ellipsis overflow-hidden">{title}</h4>
                            <p className="text-sm font-extralight whitespace-nowrap overflow-hidden text-ellipsis">{description}</p>
                        </div>
                        {statusBars[productStatus]}
                        <div className={`flex justify-center`}>
                            <MainButton onClick={() => setOpenOrderCard(true)} width="min">Selecionar</MainButton>
                        </div>
                    </article>



                    {openOrderCard && (
                        <OrderCardProduct  
                            status={statusBars[selectedStatus]}
                            title={title}
                            value={value}
                            image={image}
                            statusBars={statusBars}
                            productStatus={productStatus}
                            setOpenOrderCard={setOpenOrderCard}
                            setSelectedStatus={setSelectedStatus}
                            id={id}
                            orderId={orderId}
                            changedStatusProduct={(id, selectedStatus) => changedStatusProduct(id, selectedStatus)}
                        />
                    )}

                {openDrawerBuy && (
                    <DrawerPurchase
                        openDrawerBuy={openDrawerBuy}
                        setOpenDrawerBuy={setOpenDrawerBuy}
                        selectedProducts={selectedProducts}
                    />
                )}

                </div>
            </div>
        )
    }