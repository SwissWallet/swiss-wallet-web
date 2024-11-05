
    import { useState } from "react";
    import { MainButton } from "../../components/micro-components/main-button";
    import { OrderCardProduct } from "./order-card-product";
    import { CheckProduts } from ".";
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
        selectedProducts?: CheckProduts[],
        handdleSelectProducts?: (isSelect: boolean, id: string, title: string, value: number) => void;
    };
    
    export function SingleOrdersProductCard({
        id,
        title,
        image,
        value,
        orderId,
        username,
        description,
        handdleSelectProducts,
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
                    <article className="bg-black text-white p-4 rounded-lg gap-4 flex flex-col lg:w-[320px] w-[200px] -mt-36 px-10">
                        <div className="flex flex-col gap-1 text-center ">
                            <h4 className="text-xl font-semibold whitespace-nowrap text-ellipsis overflow-hidden">{title}</h4>
                            <p className="text-sm font-extralight whitespace-nowrap overflow-hidden text-ellipsis">{description}</p>
                        </div>
                        <div className={`flex justify-center`}>
                            <MainButton onClick={() => setOpenOrderCard(true)} width={`${""}`}>Selecionar</MainButton>
                        </div>
                    </article>



                    {openOrderCard && (
                        <OrderCardProduct 
                            title={title}
                            value={value}
                            image={image}
                            setOpenOrderCard={setOpenOrderCard}
                            id={id}
                            orderId={orderId}
                        />
                    )}

                </div>
            </div>
        )
    }