import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { api } from "../../lib/axios";
import { InfoExtract } from "./line-info-extract";

interface extractContent {
    id: string,
    description: string,
    value: string,
    type: string,
    date: string
}

export function UserExtract() {

    const [extractList, setExtractList] = useState<extractContent[]>([]);

    useEffect(() => {
        async function getExtracts() {
            const token = localStorage.getItem('token');

            await api.get(`/v3/extracts/current`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((json) => {
                    const data = json.data;
                    if (data !== ""){
                        setExtractList(data.map((item: extractContent) => ({
                            id: item.id,
                            description: item.description,
                            value: item.value,
                            type: item.type,
                            date: item.date
                        })))
                    }  
                })
        }
        getExtracts()
    }, [])

    const extractOrder = extractList.reverse();

    return (
        <div className="bg-default-gray min-h-screen">
            <Navbar />
            <main className="px-4 md:px-10 lg:px-20 gap-10 flex flex-col mt-10 md:mt-20 mb-10 md:mb-20">
                <HeaderOnPages title="Extrato" description="Informações do extrato" notFilterAndOrder={true} />
                <section className="w-full">
                    <div className="flex flex-col bg-white p-4 md:p-5 drop-shadow-custom rounded-md w-full">
                        {extractOrder.map((extract) => (
                            <div key={extract.id}>
                                <InfoExtract
                                    icon={extract.type === "DEPOSIT" ?
                                        <ChevronUp className="w-6 h-6 text-green-500" /> :
                                        <ChevronDown className="w-6 h-6 text-red-600" />}
                                    value={extract.value}
                                    date={extract.date} />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
