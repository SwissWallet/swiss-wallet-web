import { Footer } from "../../components/macro-components/footer";
import { Navbar } from "../../components/macro-components/navbar";
import { InfoUser } from "../../components/micro-components/line-info-user";
import { UpdateButton } from "../../components/micro-components/update-button";

export function UserAccount(){
    return(
        <div className="bg-white-90">
            <Navbar />

            <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">

                <div className="flex flex-col justify-start">
                    <h1 className="font-bold text-4xl">Dados pessoais</h1>
                    <p className="italic font-medium">Informações do usuário</p>
                </div>

                <section className="ml-20 mr-20">
                    <div className="flex flex-col bg-white p-5 drop-shadow-2xl shadow-black rounded-md">
                        <div className="flex justify-end" >
                            <UpdateButton/>
                        </div>
                        <InfoUser label="Nome" value="Usuário" />
                        <InfoUser label="Data de nascimento" value="25/07/2000" />
                        <InfoUser label="CPF" value="12345678910" />
                        <InfoUser label="Telefone" value="11946415527" />
                    </div>
                </section>
                <section className="ml-20 mr-20">
                    <div className="flex flex-col bg-white p-5 shadow-black shadow-md rounded-md">
                        <div className="flex justify-end" >
                            <UpdateButton/>
                        </div>
                        <InfoUser label="Cidade" value="São Paulo" />
                        <InfoUser label="Bairro" value="Centro" />
                        <InfoUser label="CEP" value="11590-130" />
                        <InfoUser label="Rua" value="Conselheiro Crispianiano" />
                        <InfoUser label="Complemento" value="Apto 202, Bloco B" />
                    </div>
                </section>
                <section className="ml-20 mr-20">
                    <div className="flex flex-col bg-white p-5 shadow-black shadow-md rounded-md">
                        <div className="flex justify-end" >
                            <UpdateButton/>
                        </div>
                        <InfoUser label="E-mail" value="username@senaisp" />
                        <InfoUser label="Senha" value="******12" />
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}