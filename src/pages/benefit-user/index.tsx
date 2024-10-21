import { useState } from "react";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { UserSelect } from "../../components/micro-components/category-input";

export function BenefitUser(){

    const [ filter, setFilter ] = useState<"ACTIVE" | "REQUEST" | "">("");


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