import { X } from "lucide-react";
import { MainButton } from "../micro-components/main-button";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { api } from "../../lib/axios";
interface CardProductProps {
    id: string,
    title: string,
    description: string,
    image: string,
    value: number,
    category: string,
    closeCardProduct: () => void
}

export function CardProduct({
    closeCardProduct,
    id,
    title,
    description,
    image,
    value
}: CardProductProps) {
    const user = useSelector((state: RootState) => state.authUser.value)
    const role = user.user.role;

    const isCLient = role === "ROLE_CLIENT";

    async function favoriteProduct(){
        await api.post(`/v3/favorites?idProduct=${id}`)
        .then(() => {
            closeCardProduct();
        })
    };

    async function orderProduct(){
        const token = localStorage.getItem("token");

        await api.post(`/v3/orders?idProduct=${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(() => {
            closeCardProduct();
        })
    };

    async function deleteProduct(){
        await api.delete(`/v3/products?id=${id}`)
            .then(() => {
                closeCardProduct();
            })
            .catch(() => {
                console.log("error")
            })
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-red-gradient rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
                <div className="flex">
                    <div className="bg-white rounded-xl shadow-xl p-5">
                        <img className="w-[309px] h-[407px]" src={image} alt="produto" />
                    </div>
                    <article className="flex flex-col w-1/2 justify-between p-5">
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-end">
                                <button className="flex justify-end" onClick={closeCardProduct}><X className="size-6 hover:text-zinc-300 text-white" /></button>
                            </div>
                            <h1 className="text-white font-bold text-4xl">{title}</h1>
                            <h3 className="text-zinc-300 mt-2">{description}</h3>
                        </div>
                        <div className="text-white flex justify-center">
                            <h1 className="text-3xl font-extrabold">{value}  <span className="text-xl font-semibold">   pontos</span></h1>
                        </div>
                        {isCLient ? (
                            <div className={`space-y-2 flex flex-col justify-center`}>
                                <MainButton width="min" onClick={orderProduct}>Pedir</MainButton>
                                <MainButton width="min" onClick={favoriteProduct}>Favoritar</MainButton>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <MainButton>Alterar</MainButton>
                                <MainButton onClick={deleteProduct} >Excluir</MainButton>
                            </div>
                        )}
                    </article>
                </div>
            </div>
        </div>
    )
}