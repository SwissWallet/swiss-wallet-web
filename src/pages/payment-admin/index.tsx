import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { CardPayment } from "./payment-card";

export function PaymentAdmin(){
    return(
        <div className="bg-default-gray">
            <Navbar />
            <main className="flex flex-col ml-20 mr-20 mb-20 mt-20 gap-20">
                <HeaderOnPages
                    title="Lista de Pagamentos"
                    description="Lista de pedidos e pagamentos dos usuários"
                    notFilterAndOrder={true}
                />
                <CardPayment />
            </main>
            <Footer />
        </div>
    );
};