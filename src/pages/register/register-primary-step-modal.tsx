import { Link } from "react-router-dom";
import { BackButton } from "../../components/micro-components/back-button";
import { MainButton } from "../../components/micro-components/main-button";
import { UserInput } from "../../components/micro-components/user-input";
import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../../features/get-user-input-slice";
import { AppDispatch, RootState } from "../../store";
import { setNewUser } from "../../features/create-new-user-slice";

interface RegisterPrimaryStepPros {
    finishedPrimaryStep: () => void,
}

export function RegisterPrimaryStep({
    finishedPrimaryStep,
}: RegisterPrimaryStepPros) {
    
    const { user } = useSelector(
        (state: RootState) => state.createNewUser
    );
    const { cpf, username, phone, birthDate } = user;

    
    const dispatch = useDispatch<AppDispatch>();

    const handdleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!username.endsWith('.com') || !username.includes('@')){    
            return
        }

        if(cpf.length !== 11){
            console.log('cpf inválido')
            return
        }

        if(phone.length !== 11){
            console.log('telefone inválido')
            return
        }

        if(birthDate){
            const [year] = birthDate.split('-');
            const yearBornUser = parseInt(year.replace(/-/g, ''));

            const yearCurrent = new Date().getFullYear();

            const userAge = yearCurrent - yearBornUser

            if(userAge < 14 || userAge > 100 || yearBornUser > yearCurrent){
                console.log('Data de nascimento inválida')
                return
            }
        }

        finishedPrimaryStep();
    }

    const handdleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        dispatch(setNewUser({[name]: value}))
    };


    return (

        <div className="bg-white rounded-lg w-[600px] h-auto p-8 flex gap-8 flex-col">
            <Link to={'/'}>
                <BackButton />
            </Link>
            <form onSubmit={handdleSubmit} className="flex gap-8 flex-col">

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
                    <UserInput 
                        placeholder="ex: José da Silva" 
                        type="text" 
                        name="name" 
                        onChange={handdleChange}
                        pattern="^[a-zA-ZÀ-ÿ\s]+$" 
                        title="O nome não deve conter números."
                    >Nome completo</UserInput>

                    <UserInput 
                        name="birthDate" 
                        onChange={handdleChange}
                        type="date"
                    >Data de Nascimento</UserInput>


                    <UserInput 
                        placeholder="ex: jose.silva@senaisp" 
                        type="email" 
                        name="username" 
                        onChange={handdleChange}
                    >E-mail</UserInput>



                    <UserInput 
                        placeholder="ex: 12345678910" 
                        type="number" 
                        name="cpf" 
                        onChange={handdleChange} 
                        maxLength={11} minLength={11} required
                    >CPF </UserInput>

                    <UserInput 
                        placeholder="ex: 11991827364" 
                        type="number" 
                        name="phone" 
                        onChange={handdleChange}
                        maxLength={11} minLength={11} required
                    >Telefone</UserInput>
                </div>
                <div className="flex justify-center items-center">
                    <MainButton type="submit" >
                        Avançar
                    </MainButton>
                </div>

            </form>
        </div>
    )
}