import { useState } from "react";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { UserSelect } from "../../components/micro-components/category-input";
import { api } from "../../lib/axios";

interface benefit{
    id: string;
    title: string;
    description: string;
    status?: string;
    dateTime?: string;
    benefitActive?: {
        id: string;
        title: string;
        description: string;
    }
};

export function BenefitUser(){

    const [ filter, setFilter ] = useState<"ACTIVE" | "REQUEST" | "">("");
    const [ benefits, setBenefits ] = useState<benefit>();
    
    async function getBenefitActiveClient(){
        api.get(`/v3/benefit/requests/current`)
        .then((json) => {
            const data = json.data;
            console.log(data);
            setBenefits(data.activeResponseDtos.map((benefit: benefit) => ({
                id: benefit.id,
                title: benefit.title,
                description: benefit.description
            })))
            setBenefits(data.reqResponseDtos.map((benefit: benefit) => ({
                id: benefit.id,
                status: benefit.status,
                dateTime: benefit.dateTime,
                benefitActive: {
                    id: benefit.benefitActive.id,
                    title: benefit.benefitActive.title,
                    description: benefit.benefitActive.description
                }
            })))
        })
    };



    return(
        <div className="bg-default-gray">
            <Navbar />
            <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">

                <div className="flex justify-between">
                    <HeaderOnPages
                        title="Beneficíos"
                        description="Confira a lista de beneficios de assinantes da AAPM"
                        notFilterAndOrder={true}
                    />

                    <div className="w-1/6">
                        <UserSelect
                            firstMessage="Filtre por status"
                            options={[
                                {key: "ACTIVE", value: "DISPONIVEL"},
                                {key: "REQUEST", value: "ENVIADO"},
                            ]}
                            onChange={(e) => setFilter(e.target.value)}
                        />
                    </div>
                </div>

                

            </main>
            <Footer />
        </div>
    )
};