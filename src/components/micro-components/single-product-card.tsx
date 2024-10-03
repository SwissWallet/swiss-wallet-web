import { api } from "../../lib/axios";
import { CardProduct } from "../macro-components/card-product";
import { MainButton } from "../micro-components/main-button"
import { ReactNode, useState } from "react"
import { BackButton } from "./back-button";

interface SingleProductProps {
    textOnButton: ReactNode,
    title: string,
    description: string,
    image: string,
    value: number,
    id: string,
    category: string,
}

export function SingleProduct({
    textOnButton,
    title,
    description,
    image,
    value,
    id,
    category
}: SingleProductProps) {

    const [openCard, setOpenCard] = useState(false);
    const [ openRemoveFavoritesModal, setRemoveFavoritesModal ] = useState(false);

    function openCardProduct() {
        setOpenCard(true);
    }

    function closeCardProduct() {
        setOpenCard(false);
    }

    

    return (
        <>
            <div className="flex items-center flex-col bg-white rounded-xl shadow-xl p-6">
                <img className="w:[209px] lg:w-[309px]  h-[350px] lg:h-[457px]" src={image} alt="Produto não existe" />
                <article className="bg-black text-white p-4 rounded-lg gap-4 flex lg:-mt-36 flex-col lg:flex-col">
                    <div className="flex flex-col gap-1">
                        <h4 className="text-xl font-semibold">{title}</h4>
                        <p className="text-sm font-extralight">{description}</p>
                    </div>
                    <div className="flex justify-between gap-10 w-full flex-col lg:flex-row">
                        <h4 className="font-extrabold text-4xl mt-">{value}<span className="text-sm ml-1">pontos</span></h4>

                        {textOnButton === "Remover" ? 
                            
                            (
                                <MainButton onClick={() => setRemoveFavoritesModal(true)} width="min" >
                                    {textOnButton}
                                </MainButton>
                            ) : (
                                <MainButton onClick={openCardProduct} width="min" >
                                    {textOnButton}
                                </MainButton>
                            )

                        }

                    </div>
                </article>
            </div>

            {openRemoveFavoritesModal && (
                <RemoveFavoritesModal
                    id={id}
                    title={title}
                    setRemoveFavoritesModal={setRemoveFavoritesModal}
                />
            )}

            {openCard && (
                <CardProduct
                    closeCardProduct={closeCardProduct}
                    image={image}
                    title={title}
                    value={value}
                    description={description}
                    id={id}
                    category={category}
                />
            )}
        </>
    )
};

interface removeFavoritesModalProps{
    id: string,
    title: string,
    setRemoveFavoritesModal: (e: boolean) => void;
};

const RemoveFavoritesModal = ({
    id,
    title,
    setRemoveFavoritesModal
}: removeFavoritesModalProps) => {

    async function deleteFavorite(){
        await api.delete(`/v3/favorites?idProduct=${id}`)
        .then(()=>
            setRemoveFavoritesModal(false)
        ).catch((error) =>
            console.log("Deu ruim " + error)
        )
    };

    return(
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50">
            <div className="w-auto h-auto p-5 bg-white rounded-lg gap-10 flex flex-col">
                <div className="flex flex-col gap-3">
                <BackButton onClick={() => setRemoveFavoritesModal(false)} />
                    <h1 className="text-2xl font-medium">Remover favorito</h1>
                    <p className="font-medium text-sm text-zinc-600 ml-4">Confirme a remoção do favorito</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-center text-xl font-medium">Você tem certeza que deseja remover este pedido</h1>
                    <h1 className="text-center">{title} ?</h1>

                    <div className="flex justify-between px-20 mt-5">
                        <button
                            className="font-medium text-zinc-500 hover:text-zinc-600 hover:bg-zinc-200 rounded-md px-5"
                            type="button"
                            onClick={() => setRemoveFavoritesModal(false)}
                        >Voltar
                        </button>
                        <MainButton onClick={deleteFavorite} width="min">Remover</MainButton>
                    </div>
                </div>
            </div>
        </div>
    )
};