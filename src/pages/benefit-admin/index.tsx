import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";

export function BenefitAdmin(){
    return(
        <div className="bg-default-gray">
        <Navbar />
        <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">

            <HeaderOnPages
                title="Beneficíos"
                description="Confira a lista de beneficios de assinantes da AAPM"
                notFilterAndOrder={true}
            />

        </main>
        <Footer />
    </div>
    )
};