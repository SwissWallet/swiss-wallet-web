import { Navbar } from "../../components/macro-components/navbar";
import { Footer } from "../../components/macro-components/footer";
import { SingleProduct } from "../../components/micro-components/single-product-card";

export function Favorites() {
    return (
        <div>
            <Navbar />
            <div className="ml-20 mr-20">
                <h1 className="text-4xl font-bold">Favoritos</h1>
                <p className="mb-10">Confira sua lista de favoritos</p>
            </div>
            <main className="ml-20 mr-20 flex justify-between">
                <div className="flex gap-7">
                    <article className="bg-white p-10 rounded-xl flex justify-between pt-10 pb-10 shadow-2xl ">
                        <SingleProduct />
                    </article>
                    <article className="bg-white p-10 rounded-xl flex justify-between pt-10 pb-10 shadow-2xl ">
                        <SingleProduct />
                    </article>
                    <article className="bg-white p-10 rounded-xl flex justify-between pt-10 pb-10 shadow-2xl ">
                        <SingleProduct />
                    </article>
                    <article className="bg-white p-10 rounded-xl flex justify-between pt-10 pb-10 shadow-2xl ">
                        <SingleProduct />
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    )
}