import { SingleProduct } from "../micro-components/single-product-card";

export function CardDestaques() {
    return (
        <div className="bg-white p-10 w-[1400px] rounded-xl shadow-lg mt-24 ">
            <div className="flex items-center">
                <h3 className="text-4xl font-bold flex justify-between mb-8">Destaques - Loja</h3>
            </div>
            <div className="inline-block">
                <div className="flex justify-around w-[1300px]">
                    <SingleProduct
                        textOnButton={'ver mais'}
                    />
                    <SingleProduct
                        textOnButton={'ver mais'}
                    />
                    <SingleProduct
                        textOnButton={'ver mais'}
                    />
                </div>
            </div>
        </div>
    )
}