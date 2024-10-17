import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { MainButton } from "../../components/micro-components/main-button";
import { api } from "../../lib/axios";
import { RootState } from "../../store";
import { BenefitsCard } from "./benefits-card";
import { NewBenefitModal } from "./new-benefit-modal";
import { UserSelect } from "../../components/micro-components/category-input";

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
    const [ filter, setFilter ] = useState("");

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
            const data = json.data;
            console.log(data);
            setBenefits(data.activeResponseDtos.map((benefit: benefit) => ({
                id: benefit.id,
                title: benefit.title,
                description: benefit.description
            })))
            setBenefitRequest(data.reqResponseDtos.map((benefit: reqBenefit) => ({
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
                    {isClient ? (
                        <UserSelect 
                            firstMessage="Filtre por status"
                            options={[
                                {key: "ACTIVE", value: "DISPONIVEL"},
                                {key: "REQUEST", value: "ENVIADO"},
                            ]}
                            onChange={(e) => setFilter(e.target.value)}
                        />
                    ) : (
                        <div className={`flex gap-10 items-center`}>
                            <MainButton 
                                onClick={() => setOpenNewBenefit(true)}
                                width="min"
                            >
                                Novo Benefício
                            </MainButton>
                        </div>
                    )}
                </div>

                {isClient ? (
                    <>
                        {filter === "" && (
                            <>
                            {benefits.reverse().map((item) => (
                                <div key={item.id}>
                                <BenefitsCard
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    getBenefitActiveClient={getBenefitActiveClient}
                                />
                                </div>
                            ))}

                            {benefitRequest.reverse().map((item) => (
                                <div key={item.id}>
                                <BenefitsCard
                                    id={item.benefitActive.id}
                                    title={item.benefitActive.title}
                                    description={item.benefitActive.description}
                                    dateTime={item.dateTime}
                                    idRequest={item.id}
                                    req={true}
                                    status={item.status}
                                />
                                </div>
                            ))}
                            </>
                        )}

                        {
                            filter === "ACTIVE" &&
                                benefits.length > 0 && 
                                    benefits.reverse().map((item) => (
                                        <div key={item.id}>
                                        <BenefitsCard
                                            id={item.id}
                                            title={item.title}
                                            description={item.description}
                                            getBenefitActiveClient={getBenefitActiveClient}
                                        />
                                        </div>
                                    ))
                        }

                        {
                            filter === "REQUEST" &&
                                benefitRequest.length > 0 &&
                                    benefitRequest.reverse().map((item) => (
                                        <div key={item.id}>
                                        <BenefitsCard
                                            id={item.benefitActive.id}
                                            title={item.benefitActive.title}
                                            description={item.benefitActive.description}
                                            dateTime={item.dateTime}
                                            idRequest={item.id}
                                            req={true}
                                            status={item.status}
                                        />
                                        </div>
                                    ))
                        }
                    </>
                    ) : (
                    benefits.length > 0 && 
                        benefits.reverse().map((item) => (
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