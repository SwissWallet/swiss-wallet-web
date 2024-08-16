import { CircleHelp } from "lucide-react";
import { MainButton } from "../../components/micro-components/main-button";

export function BenefitsCard(){
    return(
                <section className="ml-20 mr-20">
                    <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md gap-6">
                        <div className="flex flex-col justify-start px-10">
                            <h1 className="text-2xl font-semibold">Beneficio 1</h1>
                            <p className="w-full overflow-hidden italic font-medium ">
                                Descrição do beneficio
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <div className="flex gap-10 items-center">
                                <button className="flex gap-3 text-zinc-700 hover:text-zinc-800">
                                    <p>Dúvidas frequentes</p>
                                    <CircleHelp/>
                                </button>
                                <MainButton width="min" >Solicitar beneficio</MainButton>
                            </div>
                        </div>
                    </div>
                </section>
    )
}