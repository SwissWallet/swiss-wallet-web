import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { InfoUser } from "../../components/micro-components/line-info-user";
import { UpdateButton } from "../../components/micro-components/update-button";

export function UserAccount(){
    return(
        <div className="bg-white-90">
            <Navbar />

            <main className="ml-20 mr-20">

                <div className="flex flex-col justify-start">
                    <h1 className="font-bold text-4xl">Dados pessoais</h1>
                    <p className="italic font-medium">Informações do usuário</p>
                </div>

                <section className="ml-20 mr-20">
                    <div className="flex flex-col bg-white p-5 shadow-black shadow-md rounded-md">
                        <div className="flex justify-end" >
                            <UpdateButton/>
                        </div>
                        <InfoUser />
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}