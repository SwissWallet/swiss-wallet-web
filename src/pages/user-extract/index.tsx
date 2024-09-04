import { InfoExtract } from "./line-info-extract"
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages"
import { ChevronDown, ChevronUp } from "lucide-react"
import { InfoDateExtract } from "./info-date-extract"
import { Footer } from "../../components/macro-components/footer"
import { Navbar } from "../../components/macro-components/navbar"
import { api } from "../../lib/axios"
import { useEffect, useState } from "react"
import { json } from "react-router"
import { da, id } from "date-fns/locale"

interface extractInterface{
    id: string,
    value: number,
    date: string
}

export function UserExtract(){

    const extract = {
        id: "",
        value: "",
        date: ""
    }

    const [extractList, setExtractList] = useState([extract]);
   
    useEffect(() => {
        async function getExtracts(){
            await api.get(`/v3/extracts/current`)
            .then((json) => {
                const data = json.data;
                setExtractList(data.map((item: extractInterface) => ({
                    id: item.id,
                    value: item.value,
                    date: item.date
                })))
            })
        }

        getExtracts()
    }, [])

    return (
        <div className="bg-default-gray"> 

            <Navbar/>

            <main className="ml-20 mr-20 gap-10 flex flex-col mt-20 mb-20">

                <HeaderOnPages  title="Extrato" description="Informações do extrato"/>

                <section className="ml-20 mr-20">

                    <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md">

                        <div className="pb-4 pl-2"> <InfoDateExtract date="17/Ago/2024"/></div>
                        {extractList.map((extract) => (
                            <InfoExtract  
                            icon={<ChevronUp className="size-8 text-green-500"/>}  
                            value={extract.value} 
                            time={extract.date}/>
                        ))}
                    </div>

                </section>
            </main> 

            <Footer/>

        </div>
    )
}