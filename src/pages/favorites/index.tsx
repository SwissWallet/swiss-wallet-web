import { Navbar } from "../../components/macro-components/navbar";
import { Footer } from "../../components/macro-components/footer";
import { SingleProduct } from "../../components/micro-components/single-product-card";
import { Heart } from "lucide-react";

export function Favorites() {
    return (
        <div>

            <Navbar />

            <main className="ml-20 mr-20 justify-between flex flex-col gap-20 mt-20 mb-20">
                <div className="ml-20 mr-20">
                    <h1 className="text-4xl font-bold">Favoritos</h1>
                    <p className="mb-10">Confira sua lista de favoritos</p>
                </div>

                <section className="flex w-full justify-between">

                    <SingleProduct
                        textOnButton={<Heart className="fill-white" />}
                    />
                    <SingleProduct 
                        textOnButton={<Heart className="fill-white"/>}
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