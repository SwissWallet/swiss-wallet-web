import { MainButton } from "../../components/micro-components/main-button";

interface BenefitsCardProps {
    id: string;
    title: string;
    description: string;
    dateTime?: string;
    status?: string;
    idRequest?: string;
    req?: boolean;
}

export function BenefitsCard({
    title,
    description,
    status,
    dateTime,
    req,
}: BenefitsCardProps) {
    return (
        <section className="ml-20 mr-20">
            <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md gap-6">
                <div className="flex flex-col justify-start gap-3">
                    <div className="flex justify-between px-5">
                        <h1 className="text-2xl font-semibold">{title}</h1>
                        {req && ( 
                            <h1 className="text-xl font-semibold">{dateTime}</h1>
                        )}
                    </div>
                    <p className="w-full overflow-hidden italic font-medium px-10">
                        {description}
                    </p>
                </div>
                <div className="flex justify-end">
                    {req ? (
                        <h1 className="text-2xl font-medium px-10">{status}</h1>
                    ) : (
                        <div className="flex gap-10 items-center">
                            <MainButton width="min" >Solicitar beneficio</MainButton>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}