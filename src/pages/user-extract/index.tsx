import { InfoExtract } from "./line-info-extract"
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages"
import { ChevronDown, ChevronUp } from "lucide-react"
import { InfoDateExtract } from "./info-date-extract"
import { Footer } from "../../components/macro-components/footer"
import { Navbar } from "../../components/macro-components/navbar"
import { api } from "../../lib/axios"
import { useState } from "react"

export function UserExtract(){

    const [products, setProducts] = useState([]);
    const response = api.get("/v3/extracts/current").then((json) => {
        setProducts(json.data);console.log(products)
    }).catch(error => console.log(error))

    return (
        <div className="bg-default-gray"> 

            <Navbar/>

            <main className="ml-20 mr-20 gap-10 flex flex-col mt-20 mb-20">

                <HeaderOnPages  title="Extrato" description="Informações do extrato"/>

                <section className="ml-20 mr-20">

                    <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md">

                        <div className="pb-4 pl-2"> <InfoDateExtract date="17/Ago/2024"/></div>

                        <InfoExtract  icon={<ChevronUp className="size-8 text-green-500"/>}  value="40" time="12:30"/>
                        <InfoExtract  icon={<ChevronDown className="size-8 text-red-500"/>}  value="12" time="11:30"/>
                        <InfoExtract  icon={<ChevronUp className="size-8 text-green-500"/>}  value="10" time="10:30"/>
                    </div>

                </section>


                <section className="ml-20 mr-20">

                    <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md">

                        <div className="pb-4 pl-2"> <InfoDateExtract date="18/Ago/2024"/></div>

                        <InfoExtract  icon={<ChevronUp className="size-8 text-green-500"/>}  value="40" time="12:30"/>
                        <InfoExtract  icon={<ChevronDown className="size-8 text-red-500"/>}  value="45" time="11:30"/>
                        <InfoExtract  icon={<ChevronDown className="size-8 text-red-500"/>}  value="24" time="10:30"/>
                        <InfoExtract  icon={<ChevronUp className="size-8 text-green-500"/>}  value="12" time="09:30"/>

                    </div>

                </section>

            </main> 

            <Footer/>

        </div>
    )
}