import { useSelector } from "react-redux";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { MainButton } from "../../components/micro-components/main-button";
import { RootState } from "../../store";
import { BenefitsCard } from "./benefits-card";


export function Benefits() {

    const user = useSelector((state: RootState) => state.authUser.value);

    const role = user.user.role;
    const isClient = role === "ROLE_CLIENT";

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
                        <MainButton width="min">Novo Benefício</MainButton>
                    </div>
                </div>

                <BenefitsCard
                    benefitsName="Beneficio VT"
                    benefitsDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa."
                />
                <BenefitsCard
                    benefitsName="outro beneficio"
                    benefitsDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa."
                />
                <BenefitsCard
                    benefitsName="outro beneficio"
                    benefitsDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa."
                />

            </main>
            <Footer />
        </div>
    )
}