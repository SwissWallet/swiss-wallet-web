import Camisa from '../../assets/images/camisa-branca.svg'
import Coca from '../../assets/images/coquinha-gelada.svg'
import { HeaderOnPages } from "./header-on-the-pages";

export default function ListProduct() {
    return (
        <>
            <div className="m-12">
                <HeaderOnPages title="Lista de Produtos" description="Adicione produtos ou remova itens do site" />
            </div>
            <main className="bg-white shadow-lg m-12 flex flex-col justify-between rounded-3xl">
                {/* titulo */}
                <div className="flex justify-between p-12 items-center gap-8 text-2xl font-bold">
                    <h4>Imagem</h4>
                    <h4 className="w-1/4">Titulo</h4>
                    <h4 className="">Valor</h4>
                    <h4>Categoria</h4>
                    <h4>Remover</h4>
                </div>
                <div className="flex justify-between p-12 items-center gap-8 text-2xl font-bold mx-4">
                    <img src={Camisa} alt="" className="w-20" />
                    <p className="font-medium ">Camisa Peruana Preta</p>
                    <p className="font-medium ">R$ 25,00</p>
                    <p className="font-medium ">Roupa</p>
                    <p className="font-medium text-red-600 ">Excluir</p>
                </div>
                <div className="flex justify-between p-12 items-center gap-8 text-2xl font-bold mx-4">
                    <img src={Coca} alt="" className="w-20" />
                    <p className="font-medium ">Camisa Peruana Preta</p>
                    <p className="font-medium ">R$ 25,00</p>
                    <p className="font-medium ">Roupa</p>
                    <p className="font-medium text-red-600 ">Excluir</p>
                </div>
                <div className="flex justify-between p-12 items-center gap-8 text-2xl font-bold mx-4">
                    <img src={Camisa} alt="" className="w-20" />
                    <p className="font-medium ">Camisa Peruana Preta</p>
                    <p className="font-medium ">R$ 25,00</p>
                    <p className="font-medium ">Roupa</p>
                    <p className="font-medium text-red-600 ">Excluir</p>
                </div>
                <div className="flex justify-between p-12 items-center gap-8 text-2xl font-bold mx-4">
                    <img src={Coca} alt="" className="w-20" />
                    <p className="font-medium ">Camisa Peruana Preta</p>
                    <p className="font-medium ">R$ 25,00</p>
                    <p className="font-medium ">Roupa</p>
                    <p className="font-medium text-red-600 ">Excluir</p>
                </div>
            </main>
        </>
    )
}