import { Link } from "react-router-dom";
import { BackButton } from "../../components/micro-components/back-button";
import { MainButton } from "../../components/micro-components/main-button";
import { UserInput } from "../../components/micro-components/user-input";

export function RegisterPrimaryStep(){
    return(
                <form className="bg-white rounded-lg w-[600px] h-auto p-8 flex gap-8 flex-col">

                    <Link to={'/'}>
                        <BackButton />
                    </Link>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl font-medium">Cadastre-se</h1>
                        <p className="font-medium text-sm text-zinc-600 ml-4">Todos os campos são obrigatórios</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-default-red h-10 w-10 rounded-full"></div>
                        <div className="bg-dark-gray h-[2px] w-16"></div>
                        <div className="bg-dark-gray h-10 w-10 rounded-full"></div>
                        <div className="bg-dark-gray h-[2px] w-16"></div>
                        <div className="bg-dark-gray h-10 w-10 rounded-full"></div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <UserInput placeholder="ex: José da Silva" type="text">Nome completo</UserInput>
                        <UserInput type="date">Data de nascimento</UserInput>
                        <UserInput placeholder="ex: jose.silva@senaisp" type="email">E-mail</UserInput>
                        <UserInput placeholder="ex: 12345678910" type="number" >CPF</UserInput>
                        <UserInput placeholder="ex: 11991827364" type="number" >Telefone</UserInput>
                    </div>
                    <div className="flex justify-center items-center">
                        <MainButton>
                            Avançar
                        </MainButton>
                    </div>

                </form>
    )
}