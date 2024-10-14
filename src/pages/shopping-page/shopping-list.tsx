import { product } from "."
import { ShoppingCard } from "./shopping-card";

interface ShoppingListProps{
    getShoppingCart: () => void;
    listProduct: product[];
    filter: string;
}

export function ShoppingList({
    listProduct,
    filter,
    getShoppingCart,
}: ShoppingListProps){

    return(
        listProduct.length > 0 && (
            filter ? (
                listProduct
                .reverse()
                .filter((product) => product.status === filter)
                .map((item) => (
                    <div className="flex flex-col gap-6" key={item.id}>
                        <ShoppingCard
                            id={item.id}
                            dateTime={item.date}
                            productName={item.productName}
                            status={item.status === "PENDING" ? ("PENDENTE") : ("PAGO")}
                            value={item.value}
                            getShoppingCart={getShoppingCart}
                        />
                    </div>
                ))
            ) : (
                listProduct
                .reverse()
                .map((item) => (
                    <div className="flex flex-col gap-6" key={item.id}>
                        <ShoppingCard
                            id={item.id}
                            dateTime={item.date}
                            productName={item.productName}
                            status={item.status === "PENDING" ? ("PENDENTE") : ("PAGO")}
                            value={item.value}
                            getShoppingCart={getShoppingCart}
                        />
                    </div>
                ))
            )
        )
    )
}