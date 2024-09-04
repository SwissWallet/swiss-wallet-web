import { InfoExtract } from "./line-info-extract";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { api } from "../../lib/axios"
import { useEffect, useState } from "react"

interface extractContent {
    id: string,
    description: string,
    value: string,
    type: string,
    date: string
}

export function UserExtract(){

    const extract = {
        id: "",
        description: "",
        value: "",
        type: "",
        date: "",
    };

    const [extractList, setExtractList] = useState([extract]);
   
    useEffect(() => {
        async function getExtracts(){
            await api.get(`/v3/extracts/current`)
            .then((json) => {
                const data = json.data;

                setExtractList(data.map((item: extractContent) => ({
                    id: item.id,
                    description: item.description,
                    value: item.value,
                    type: item.type,
                    date: item.date
                })))
            })
        }

        getExtracts()
    }, [])

    const extractOrder = extractList.reverse();

    return (
        <div className="bg-default-gray"> 

            <Navbar/>

            <main className="ml-20 mr-20 gap-10 flex flex-col mt-20 mb-20">

                <HeaderOnPages  title="Extrato" description="Informações do extrato"/>
                
                <section className="ml-20 mr-20">

                    <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md">

                        {extractOrder.map((extract) => (
                            <div key={extract.id}>
                                <InfoExtract  
                                icon={extract.type === "DEPOSIT" ? 
                                    <ChevronUp className="size-8 text-green-500"/> :
                                    <ChevronDown className="size-8 text-red-600" />}  
                                value={extract.value} 
                                date={extract.date}/>
                            </div>
                        ))}
                    </div>

                </section>
            </main> 

            <Footer/>

        </div>
    )
}