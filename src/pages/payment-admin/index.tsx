import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";

export function PaymentAdmin(){
    return(
        <div className="bg-default-gray">
            <Navbar />
            <main className="flex flex-col ml-20 mr-20 mb-20"></main>
            <Footer />
        </div>
    );
};