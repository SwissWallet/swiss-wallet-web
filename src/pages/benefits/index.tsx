import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";


export function Benefits(){
    return(
        <div className="bg-default-gray">
            <Navbar />
            <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold">Beneficios</h1>
                    <p className="italic font-medium">Confira a lista de beneficios de assinantes da AAPM</p>
                </div>

                

            </main>
            <Footer />
        </div>
    )
}