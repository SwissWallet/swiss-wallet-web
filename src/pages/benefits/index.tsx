import { useSelector } from "react-redux";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { MainButton } from "../../components/micro-components/main-button";
import { RootState } from "../../store";
import { BenefitsCard } from "./benefits-card";
import { useEffect, useState } from "react";
import { NewBenefitModal } from "./new-benefit-modal";
import { api } from "../../lib/axios";

interface benefit{
    id: string;
    title: string;
    description: string;
};

interface reqBenefit{
    id: string;
    status: string;
    dateTime: string;
    benefitActive: benefit
}


export function Benefits() {

    const [ openNewBenefit, setOpenNewBenefit ] = useState<boolean>(false);
    const [ benefits, setBenefits ] = useState<benefit[]>([]);
    const [ benefitRequest, setBenefitRequest ] = useState<reqBenefit[]>([]);

    const user = useSelector((state: RootState) => state.authUser.value);

    const role = user.user.role;
    const isClient = role === "ROLE_CLIENT";

    async function getBenefitExistent(){
        api.get(`/v3/benefit/actives`)
        .then((json) => {
            const data = json.data;
            setBenefits(data.map((benefit: benefit) => ({
                id: benefit.id,
                title: benefit.title,
                description: benefit.description
            })))
        })
    };

    async function getBenefitActiveClient(){
        api.get(`/v3/benefit/requests/current`)
        .then((json) => {
            const data = json.data.activeResponseDtos;
            console.log(data);
            setBenefits(data.map((benefit: benefit) => ({
                id: benefit.id,
                title: benefit.title,
                description: benefit.description
            })))
        })
    };

    useEffect(() => {
        if(isClient){
            getBenefitActiveClient();
        }else{
            getBenefitExistent();
        }
    }, [isClient])

    return (
        <div className="bg-default-gray">
            <Navbar />
            <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">

                <div className="flex justify-between">
                    <HeaderOnPages
                        title="Beneficíos"
                        description="Confira a lista de beneficios de assinantes da AAPM"
                        notFilterAndOrder={true}
                    />
                    <div className={`flex gap-10 items-center ${isClient ? "hidden" : "block"}`}>
                        <MainButton 
                            onClick={() => setOpenNewBenefit(true)}
                            width="min"
                        >
                            Novo Benefício
                        </MainButton>
                    </div>
                </div>
                
                {benefits.length > 0 && (
                    benefits.map((item) => (
                        <div key={item.id}>
                            <BenefitsCard
                                id={item.id} 
                                title={item.title}
                                description={item.description}
                            />
                        </div>
                    ))
                )}

            </main>
            <Footer />

            {openNewBenefit && (
                <NewBenefitModal 
                    setOpenNewBenefit={setOpenNewBenefit}
                />
            )}
        </div>
    )
}