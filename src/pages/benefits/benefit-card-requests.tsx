
import { api } from "../../lib/axios";
import { UserSelect } from "../../components/micro-components/category-input";

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

    async function updateStatus(cstatus: string, idRequest: string){
        await api.put(`/v3/benefit/requests`, {
            idBenefit: idRequest,
            status: cstatus
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
                <div className="flex items-center justify-end">
                        <h1 className="text-2xl text-red-600 font-bold px-10">{status}</h1>
                        <div className="flex gap-10 items-center">
                            <UserSelect
                                onChange={(e) => updateStatus(e.target.value, idRequest)}
                                firstMessage="altere o status"
                                options={[
                                    {key: "SEND", value: "ENVIADO"},
                                    {key: "IN_PROGRESS", value: "EM PROGRESSO"},
                                    {key: "APPROVED", value: "APROVADO"},
                                    {key: "NOT_APPROVED", value: "NÃO APROVADO"},
                                ]}
                            ></UserSelect>
                        </div>
                    
                </div>
            </div>
        </section>
    )
}