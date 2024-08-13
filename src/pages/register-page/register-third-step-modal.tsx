import { Link } from "react-router-dom";
import { BackButton } from "../../components/micro-components/back-button";
import { UserInput } from "../../components/micro-components/user-input";
import { MainButton } from "../../components/micro-components/main-button";

export function RegisterThirdStep(){
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
                        <div className="bg-default-red h-[2px] w-16"></div>
                        <div className="bg-default-red h-10 w-10 rounded-full"></div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <UserInput placeholder="ex: senha1234" type="text">Crie uma senha</UserInput>
                        <UserInput placeholder="ex: ">Confirme sua senha</UserInput>
                        <div className="flex justify-evenly gap-5">
                            <div className="flex gap-4 items-center">
                                <input type="checkbox" className="size-4 hover:cursor-pointer" />
                                <span className="text-zinc-600 font-medium">Aceito termos e condições</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input type="checkbox" className="size-4 hover:cursor-pointer" />
                                <span className="text-zinc-600 font-medium">Não sou um robô</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <MainButton>
                            Cadastrar
                        </MainButton>
                    </div>

                </form>
    )
}