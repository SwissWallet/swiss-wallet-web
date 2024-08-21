import { CircleHelp } from "lucide-react";
import { MainButton } from "../../components/micro-components/main-button";

interface BenefitsCardProps {
    benefitsName: string,
    benefitsDescription: string,
}

export function BenefitsCard({
    benefitsName,
    benefitsDescription,
}: BenefitsCardProps) {
    return (
        <section className="ml-20 mr-20">
            <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md gap-6">
                <div className="flex flex-col justify-start px-10 gap-3">
                    <h1 className="text-2xl font-semibold">{benefitsName}</h1>
                    <p className="w-full overflow-hidden italic font-medium ">
                        {benefitsDescription}
                    </p>
                </div>
                <div className="flex justify-end">
                    <div className="flex gap-10 items-center">
                        <button className="flex gap-3 text-zinc-700 hover:text-zinc-800">
                            <p>Dúvidas frequentes</p>
                            <CircleHelp />
                        </button>
                        <MainButton width="min" >Solicitar beneficio</MainButton>
                    </div>
                </div>
            </div>
        </section>
    )
}