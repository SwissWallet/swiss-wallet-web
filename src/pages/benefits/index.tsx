import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { BenefitsCard } from "./benefits-card";


export function Benefits(){
    return(
        <div className="bg-default-gray">
            <Navbar />
            <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold">Beneficios</h1>
                    <p className="italic font-medium">Confira a lista de beneficios de assinantes da AAPM</p>
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