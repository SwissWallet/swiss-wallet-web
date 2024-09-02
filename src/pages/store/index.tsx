import { Navbar } from "../../components/macro-components/navbar";
import { Footer } from "../../components/macro-components/footer";
import { Heart } from "lucide-react";
import { SingleProduct } from "../../components/micro-components/single-product-card";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";

export function Store() {

    return (
        <div>
            <Navbar />
            <main className="ml-20 mr-20 justify-between flex flex-col gap-20 mt-20">
                <HeaderOnPages
                    title="Loja"
                    description="Confira nossas melhores opções de camisetas"
                />
                <section className="grid grid-rows-1 grid-cols-3 gap-20 mb-20">

                    <SingleProduct
                        textOnButton={<Heart className="fill-white" />}
                    />
                    <SingleProduct
                        textOnButton={<Heart className="fill-white" />}
                    />
                    <SingleProduct
                        textOnButton={<Heart className="fill-white" />}
                    />
                    <SingleProduct
                        textOnButton={<Heart className="fill-white" />}
                    />
                    <SingleProduct
                        textOnButton={<Heart className="fill-white" />}
                    />
                    <SingleProduct
                        textOnButton={<Heart className="fill-white" />}
                    />
                </section>
            </main>
            <Footer />
        </div>
    )
}