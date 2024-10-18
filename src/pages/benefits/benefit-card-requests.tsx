import { MainButton } from "../../components/micro-components/main-button";
import { api } from "../../lib/axios";

interface BenefitsCardProps {
    id: string;
    title: string;
    description: string;
    dateTime: string;
    status: string;
    idRequest: string;
    name: string | undefined;
}

export function BenefitsCardRequests({
    title,
    description,
    status,
    dateTime,
    name,
    idRequest,
}: BenefitsCardProps) {

    async function updateStatus(idRequest: string){
        await api.put(`/v3/benefit/requests`, {
            idBenefit: idRequest,
            status: "IN_PROGRESS"
        })
        .then(() => console.log("passou"))
        .catch((err) => console.log(err))
    };

    return (
        <section className="ml-20 mr-20">
            <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md gap-6">
                <div className="flex flex-col justify-start gap-3">
                    <h1 className="text-2xl font-bold px-5 underline text-gray-800">{name}</h1>
                    
                    <div className="flex justify-between px-5">
                        <h1 className="text-2xl font-semibold">{title}</h1>
                        
                            <h1 className="text-xl font-semibold">{dateTime}</h1>
                        
                    </div>
                    <p className="w-full overflow-hidden italic font-medium px-10">
                        {description}
                    </p>
                </div>
                <div className="flex justify-end">
                    
                        <div className="flex gap-10 items-center">
                            
                            
                                <MainButton onClick={() => updateStatus(idRequest)} width="min">
                                    Alterar status
                                </MainButton>
                            
                            
                        </div>
                    
                </div>
            </div>
        </section>
    )
}