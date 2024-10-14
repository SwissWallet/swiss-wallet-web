import { useEffect, useState } from "react";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { api } from "../../lib/axios";
import { UserSelect } from "../../components/micro-components/category-input";
import { ShoppingList } from "./shopping-list";

export interface product{
    id: string;
    date: string;
    name: string;
    value: number;
    status?: string
    productName: string[];
}

export function ShoppingPage(){

    const [ listProduct, setListProduct ] = useState<product[]>([]);
    const [ filter, setFilter ] = useState("");

    const getShoppingCart: () => Promise<void> = async () => {
        await api.get(`/v3/order/carts/current`)
            .then((json) => {
                const data = json.data;
                if (data != "") {
                    setListProduct(data.map((item: product) => ({
                        id: item.id,
                        date: item.dateTime,
                        name: item.user.name,
                        status: item.status,
                        productName: item.product.map((productItem) => productItem.name),
                        value: item.value || 0,
                    })));
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getShoppingCart();
    }, [])

    return(
        <div className="bg-default-gray">
            <Navbar />
            <main className="flex flex-col ml-20 mr-20 mb-20 mt-20 gap-20">
                <div className="flex justify-between">
                    <HeaderOnPages
                        title="Minhas Compras"
                        description="Lista de compras"
                        notFilterAndOrder={true}
                    />
                    <div className="w-1/6">
                        <UserSelect
                            onChange={(e) => setFilter(e.target.value)}
                            firstMessage="Filtre as listas"
                            options={[
                                {key: "PAID", value: "PAGO"},
                                {key: "PENDING", value: "PENDENTE"}
                            ]}
                        />
                    </div>
                </div>

                <ShoppingList
                    filter={filter}
                    listProduct={listProduct}
                    getShoppingCart={getShoppingCart}
                />
                
            </main>
            <Footer />
        </div>
    )
};