import { X } from "lucide-react";
import { MainButton } from "../micro-components/main-button";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
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
    value,
    category
}: CardProductProps) {
    const user = useSelector((state: RootState) => state.authUser.value)
    const role = user.user.role;

    const isCLient = role === "ROLE_CLIENT";

    const [ openChanged, setOpenChanged ] = useState(false);
    const [ cValue, setCValue ] = useState<number>(value);
    const [ cTitle, setCTitle ] = useState(title);
    const [ cDescription, setCDescription ] = useState(description);

    async function favoriteProduct(){
        await api.post(`/v3/favorites?idProduct=${id}`)
        .then(() => {
            closeCardProduct();
        })
    };

    async function putValueProduct(){
        const token = localStorage.getItem("token");
        
        await api.put(`/v3/products/update?id=${id}`,{
            value: cValue,
            name: cTitle,
            description: cDescription
        },
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(() => {
            setOpenChanged(false);
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

    useEffect(() => {
        if(cValue.toString().length > 2){
            const n = Number(cValue.toString().slice(0, 2));
            setCValue(n);
        }
    }, [cValue]);

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
                                <input type="text" value={cTitle} 
                                    disabled={!openChanged} 
                                    minLength={1} maxLength={99} required 
                                    onChange={(e) => setCTitle(e.target.value)}
                                    className={` text-center text-white font-bold text-4xl rounded-md py-2 px-3 focus:outline-0
                                    ${openChanged ? "bg-red-600" : "bg-transparent "}`} 
                                />
                                <input type="text" value={cDescription} 
                                    disabled={!openChanged} 
                                    minLength={1} maxLength={99} required 
                                    onChange={(e) => setCDescription(e.target.value)}
                                    className={`mt-2 text-center text-zinc-300 font-medium text-xl rounded-md py-2 px-3 focus:outline-0
                                    ${openChanged ? "bg-red-600" : "bg-transparent "}`} 
                                />

                        </div>
                        <div className="text-white flex flex-col items-center justify-center">
                            
                                <input type="number" value={cValue} 
                                    disabled={!openChanged} 
                                    min={1} max={99} required 
                                    onChange={(e) => setCValue(Number(e.target.value))}
                                    className={`w-1/2 text-center font-medium text-4xl rounded-md py-2 px-3 focus:outline-0
                                    ${openChanged ? "bg-red-600" : "bg-transparent "}`} 
                                />
                            
                            <span>pontos</span>
                        </div>
                        {isCLient ? (
                            <div className={`space-y-2 flex flex-col justify-center`}>
                                {category != 'STORE' ? '' : <MainButton width="min" onClick={orderProduct}>Pedir</MainButton>}
                                <MainButton width="min" onClick={favoriteProduct}>Favoritar</MainButton>
                            </div>
                        ) : (
                            <div className="flex flex-col justify-center space-y-2">
                                {openChanged ? (
                                    <MainButton width="min" onClick={putValueProduct}>Salvar</MainButton>
                                ) : (
                                    <MainButton width="min" onClick={() => setOpenChanged(true)}>Alterar</MainButton>
                                )}
                                <MainButton width="min" onClick={deleteProduct} >Excluir</MainButton>
                            </div>
                        )}
                    </article>
                </div>
            </div>
        </div>
    )
}