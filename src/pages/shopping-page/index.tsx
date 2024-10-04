import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";

export function ShoppingPage(){
    return(
        <div className="bg-default-gray">
            <Navbar />
            <main className="flex flex-col ml-20 mr-20 mb-20 mt-20 gap-20">
                <HeaderOnPages
                    title="Compras"
                    description="Lista de compras"
                    notFilterAndOrder={true}
                />

                <div 
                    className="w-full h-auto flex flex-col px-8 justify-between rounded-lg font-medium text-2xl py-10 bg-gray-200 hover:cursor-pointer">
                    <h4 className="text-end">11/12/2022</h4>

                    <div className="mt-8">
                        <ol>
                            <li><span className="font-normal text-xl">produto 1</span></li>
                            <li><span className="font-normal text-xl">produto 1</span></li>
                            <li><span className="font-normal text-xl">produto 1</span></li>
                            <li><span className="font-normal text-xl">produto 1</span></li>
                            <li><span className="font-normal text-xl">produto 1</span></li>
                            <li><span className="font-normal text-xl">produto 1</span></li>
                        </ol>
                    </div>

                    <div className="w-full h-[1px] mt-8 bg-gray-800"/>
                    
                    <div className="flex mt-8 justify-between">
                        <div className="text-center flex flex-col gap-4">
                            <h1 className="text-zinc-700">pagamento:</h1>
                            <h1 className="text-zinc-700">PENDENTE</h1>
                        </div>
                        <button
                            className="bg-red-600 hover:bg-red-700 px-10 py-2 rounded-md text-white-90"
                        >
                            REALIZAR PAGAMENTO
                        </button>
                    </div>
                    
                </div>

            </main>
            <Footer />
        </div>
    )
};