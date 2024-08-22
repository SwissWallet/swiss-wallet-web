import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { CompletedStatus } from "./completed-status";
import { InProgress } from "./in-progress-status";
import { SingleOrdersProductCard } from "./single-orders-product-card";
import { UnavailableStatus } from "./unavailable-status";
import { WithdrawOrder } from "./withdraw-order-status";

export function Orders() {
    return (
        <div className="bg-default-gray ">

            <Navbar />

            <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">

                <div className="grid grid-cols-4 gap-20">
                    <SingleOrdersProductCard status={<InProgress />} />
                    <SingleOrdersProductCard status={<WithdrawOrder />} />
                    <SingleOrdersProductCard status={<CompletedStatus />} />
                    <SingleOrdersProductCard status={<UnavailableStatus />} />
                </div>

            </main>

            <Footer />

        </div>
    )
}