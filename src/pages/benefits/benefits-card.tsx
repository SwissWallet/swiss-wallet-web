import { Trash2 } from "lucide-react";
import { MainButton } from "../../components/micro-components/main-button";
import { api } from "../../lib/axios";

interface BenefitsCardProps {
    id: string;
    title: string;
    description: string;
    getBenefitActiveClient?: () => void;
    dateTime?: string;
    status?: string;
    idRequest?: string;
    req?: boolean;
    isClient: boolean;
    name?: string;
}

export function BenefitsCard({
    id,
    title,
    description,
    status,
    dateTime,
    req,
    getBenefitActiveClient,
    isClient,
    name,
}: BenefitsCardProps) {

    async function addRequest(id: string){
        api.post(`/v3/benefit/requests`, {
            idBenefit: id
        })
        .then(() => getBenefitActiveClient())
        .catch((err) => console.log(err))
    }
    
    return (
        <section className="ml-20 mr-20">
            <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md gap-6">
                <div className="flex flex-col justify-start gap-3">
                    {!isClient && (
                        <h1 className="text-2xl font-bold px-5 underline text-gray-800">{name}</h1>
                    )}
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
                        <h1 className="text-2xl text-red-600 font-bold px-10">{status}</h1>
                    ) : (
                        <div className="flex gap-10 items-center">
                            
                            {isClient ? (
                                <MainButton onClick={() => addRequest(id)} width="min">
                                    Solicitar benefício
                                </MainButton>
                            ) : (
                                <button>
                                    <Trash2 className="size-10 text-red-600 hover:scale-110 transition-all hover:text-red-700" />
                                </button>
                            )}
                            
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}