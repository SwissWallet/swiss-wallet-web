import { MainButton } from "../../components/micro-components/main-button";

interface BenefitsCardProps {
    id?: string;
    title: string;
    description: string;
}

export function BenefitsCard({
    title,
    description,
}: BenefitsCardProps) {
    return (
        <section className="ml-20 mr-20">
            <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md gap-6">
                <div className="flex flex-col justify-start px-10 gap-3">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <p className="w-full overflow-hidden italic font-medium ">
                        {description}
                    </p>
                </div>
                <div className="flex justify-end">
                    <div className="flex gap-10 items-center">
                        <MainButton width="min" >Solicitar beneficio</MainButton>
                    </div>
                </div>
            </div>
        </section>
    )
}