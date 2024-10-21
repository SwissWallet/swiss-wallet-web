import { MainButton } from "../../components/micro-components/main-button";
import { api } from "../../lib/axios";

interface BenefitCardActiveProps{
    id: string;
    title: string;
    description: string;
}

async function addRequest(id: string){
    await api.post(`/v3/benefit/requests`, {
        idBenefit: id
    })
    .then(() => console.log("passou"))
    .catch((err) => console.log(err))
};

export function BenefitCardActive({
    id,
    title,
    description,

}: BenefitCardActiveProps){

    return(
        <section className="ml-20 mr-20">
            <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md gap-6">
                <div className="flex flex-col justify-start gap-3">  
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <p className="w-full overflow-hidden italic font-medium px-10">{description}</p>
                </div>
                <div className="flex justify-end">
                    <div className="flex gap-10 items-center">
                        <MainButton onClick={() => addRequest(id)} width="min">
                            Solicitar benefício
                        </MainButton>
                    </div>
                </div>
            </div>
        </section>
    )
};