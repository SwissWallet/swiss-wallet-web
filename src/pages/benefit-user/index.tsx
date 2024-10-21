import { useEffect, useState } from "react";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { api } from "../../lib/axios";
import { NoProducts } from "../../components/micro-components/no-products";
import { BenefitCardActive } from "./benefit-card-active";
import { BenefitCardRequest } from "./benefit-card-request";
import { RadioButton } from "../../components/micro-components/radio-button";

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
    const [ benefitsActive, setBenefitsActive ] = useState<benefit[]>([]);
    const [ benefitsRequest, setBenefitsRequest ] = useState<benefit[]>([]);
    const [ selectedOption, setSelectedOption ] = useState("");

    const handleOptionChange = (option: string) => {
        setSelectedOption(option)
    };

    
    async function getBenefit(){
        api.get(`/v3/benefit/requests/current`)
        .then((json) => {
            const data = json.data;
            console.log(data);
            setBenefitsActive(data.activeResponseDtos.map((benefit: benefit) => ({
                id: benefit.id,
                title: benefit.title,
                description: benefit.description
            })))
            setBenefitsRequest(data.reqResponseDtos.map((benefit: benefit) => ({
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

    useEffect(() => {
        getBenefit();
    }, []);

    return(
        <div className="bg-default-gray">
            <Navbar />
            <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">

                <HeaderOnPages
                    title="Beneficíos"
                    description="Confira a lista de beneficios de assinantes da AAPM"
                    notFilterAndOrder={true}
                />

                <RadioButton 
                    selectedOption={selectedOption}
                    handleOptionChange={handleOptionChange} 
                    options={["ATIVOS", "SOLICITADOS"]}
                />
                
                
                

            </main>
            <Footer />
        </div>
    )
};