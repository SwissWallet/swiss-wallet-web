import { Link } from "react-router-dom";
import { BackButton } from "../../components/micro-components/back-button";
import { UserInput } from "../../components/micro-components/user-input";
import { ChevronDown } from "lucide-react";
import { MainButton } from "../../components/micro-components/main-button";

export function RegisterSecondaryStepModal(){
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
                        <div className="bg-default-red h-[2px] w-16"></div>
                        <div className="bg-default-red h-10 w-10 rounded-full"></div>
                        <div className="bg-dark-gray h-[2px] w-16"></div>
                        <div className="bg-dark-gray h-10 w-10 rounded-full"></div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <UserInput placeholder="ex: 11560130" type="number">CEP</UserInput>
                        
                        <div className="flex items-center gap-5 ">
                            <UserInput placeholder="ex: São Paulo" type="text">Cidade</UserInput>
                            <div className='flex flex-col gap-3'>
                                <h2 className='font-medium text-base'>UF</h2>
                                <div className="flex items-center justify-between border-2 border-zinc-300 w-28 h-11 rounded-md py-4 px-5 focus:outline-red-600 focus:border-white"> 
                                    <input className='focus:outline-none'
                                        readOnly
                                        type="text"   
                                        />
                                    <ChevronDown className="size-28 text-zinc-500"/>
                                </div>
                            </div>
                        </div>
                        <UserInput placeholder="ex: Centro" type="text" >Bairro</UserInput>
                        <UserInput placeholder="ex: Conselheiro Crispiniano" type="text" >Rua</UserInput>
                        <UserInput placeholder="ex: Apto 202, Bloco A" type="text" >Complemento</UserInput>
                    </div>
                    <div className="flex justify-center items-center">
                        <MainButton>
                            Avançar
                        </MainButton>
                    </div>

                </form>

    )
}