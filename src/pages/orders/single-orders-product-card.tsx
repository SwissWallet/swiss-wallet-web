    //@ts-nocheck
    import { useState } from "react";
    import { MainButton } from "../../components/micro-components/main-button";
    import { OrderCardProduct } from "./order-card-product";
    import { CheckProduts, StatusKey } from ".";
    import { useSelector } from "react-redux";
    import { RootState } from "../../store";
    import { Checkbox } from "../../components/micro-components/checkbox";

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
        selectedProducts?: CheckProduts[],
        handdleSelectProducts?: (isSelect: boolean, id: string, title: string, value: number) => void;
        changedStatusProduct: (id: string, statusAlt: StatusKey) => void,
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
        handdleSelectProducts,
        id,
        orderId,
    }: SingleOrdersProductCardProps) {

        const [ openOrderCard, setOpenOrderCard ] = useState(false);

        const user = useSelector((state: RootState) => state.authUser.value);

        const role = user.user.role;
        const isClient = role === "ROLE_CLIENT";

        return (
            <div className="flex">
                <div className={`${isClient ? "block" : "hidden"}`}>
                <Checkbox 
                    handleSelectProduct={(isSelect) => handdleSelectProducts(isSelect, id, title, value)}
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

                </div>
            </div>
        )
    }