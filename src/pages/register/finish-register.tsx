import { useNavigate } from "react-router-dom";
import { MainButton } from "../../components/micro-components/main-button";
import { useDispatch } from "react-redux";
import { resetUser } from "../../features/register-data-user";
import { resetAdress } from "../../features/register-user-address";
import { resetPassword } from "../../features/register-user-password";

export function FinishRegister() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handdleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        dispatch(resetUser())
        dispatch(resetAdress())
        dispatch(resetPassword())

        console.log('estado reiniciado')

        navigate('/')
    }

    return (
        <form onSubmit={handdleSubmit}  className="bg-white rounded-lg w-[600px] h-[390px] justify-center items-center px-8 flex gap-6 flex-col -mt-6">
            <div className="flex justify-center">
                <h1 className="font-medium text-3xl">Cadastro realizado com sucesso</h1>
            </div>
            <div className="p-3">
                <p className="text-center text-lg font-medium">Você ja está pronto para aproveitar nossos produtos e ofertas,
                    e esteja sempre preparado para novas promoções.</p>
            </div>
                <MainButton type="submit">
                    Avançar
                </MainButton>
            
        </form>
    )
}