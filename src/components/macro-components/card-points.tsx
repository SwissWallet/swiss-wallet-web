import { HeaderOnPages } from "./header-on-the-pages"
import MaisIcon from "../../assets/images/mais.svg"
import { IoSearchOutline } from "react-icons/io5";


export default function CardPoint() {
    return (
        <>
            <main className="ml-20 mr-20 justify-between flex flex-col gap-20 mt-20">
                <HeaderOnPages
                    title="Regitar Deposito"
                    description="Adicione pontos para alunos usando cpf ou email"
                />

            </main>
            <section className="bg-red-gradient h-2/4 mt-20 p-14">
                {/* barra de busca */}
                <div className="flex items-center justify-between p-5 bg-white rounded-full shadow-lg">
                    <p className="font-bold text-gray-400">buscar por email / cpf</p>
                    <IoSearchOutline className="w-6" />
                </div>
                <p className="text-4xl font-bold mt-14 text-white pb-2">Pontos</p>
                <div className="flex gap-10 text-white">
                    <h4 className="text-7xl text-white">0000,00</h4>
                    <img src={MaisIcon} alt="icon main" className="hover:scale-105" />
                </div>
            </section>
            <article className="bg-white p-16 rounded-3xl m-10 gap-4 flex flex-col shadow-lg">
                <p className="text-2xl font-extrabold">CPF</p>
                <h4 className="text-4xl font-extrabold">874.830.984-58</h4>
                <p className="text-5xl font-extrabold mt-10">JOSE DA SILVA SANTOS</p>
            </article>
            <button className="p-6 px-24 text-white font-bold rounded-full bg-red-gradient ml-10 mb-20">Adicionar</button>
        </>
    )
}