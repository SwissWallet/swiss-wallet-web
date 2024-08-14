import { Link } from "react-router-dom";
import { MainButton } from "../../components/micro-components/main-button";

export function FinishRegister(){
    return(
        <form className="bg-white rounded-lg w-[600px] h-auto px-8 py-11 flex gap-6 flex-col -mt-6">
            <div className="flex justify-center">
                <h1 className="font-medium text-2xl">Cadastro realizado com sucesso</h1>
            </div>
            <div className="p-3">
                <p className="text-center text-lg font-medium">Você ja está pronto para aproveitar nossos produtos e ofertas, 
                    e esteja sempre preparado para novas promoções.</p>
            </div>
            <Link to={'/'} className="flex justify-center p-[2px]">
                <MainButton>
                    Avançar
                </MainButton>
            </Link>
        </form>
    )
}