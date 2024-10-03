import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { CardPayment } from "./payment-card";

export function PaymentAdmin(){
    return(
        <div className="bg-default-gray">
            <Navbar />
            <main className="flex flex-col ml-20 mr-20 mb-20">
                <CardPayment />
            </main>
            <Footer />
        </div>
    );
};