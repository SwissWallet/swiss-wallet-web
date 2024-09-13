import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import camisa from "../../assets/images/camisa-branca.svg"
import { MainButton } from "../../components/micro-components/main-button";

export default function BuyPage() {
    return (
        <div>
            <Navbar />
            <div className="m-10 mx-20">
                <HeaderOnPages title="Comprar Produto" description="Adicione produtos ao seu carrinho de compra" />
            </div>

            <div className="flex justify-center py-10 bg-gray-100">
                <div className="shadow-lg rounded-lg w-1/4 flex justify-center h-80 bg-white hover:scale-125 ease-in-out duration-300 cursor-pointer">
                    <img src={camisa} alt="camisa" className="w-48 h-auto hover:scale-125 ease-in-out duration-300" />
                </div>
            </div>

            <section className="flex justify-between m-16">
                <div>
                    <h1 className="text-4xl font-bold">Camisa preta simples</h1>
                    <p  className="italic font-medium">Tamanho GG</p>
                </div>
                <MainButton>Adicionar ao carrinho</MainButton>
            </section>
            <section className="flex gap-10 ml-16 mr-16 w-2/6 justify-between mb-20">
                <ul className="text-2xl font-bold gap-10 flex flex-col">
                    <li>Valor</li>
                    <li>Categoria</li>
                    <li>Descrição</li>
                </ul>
                <ul className="italic font-medium text-2xl flex flex-col gap-10">
                    <li>19,00</li>
                    <li>SLA</li>
                    <li>camisa GG</li>
                </ul>
            </section>
        </div>
    )
}