import { HeaderLoginAndRegister } from "../../components/header-login-and-register";


export function LoginPage(){
    return(
        <div className="h-screen w-full bg-red-gradient">
            <HeaderLoginAndRegister />

            <main className="flex justify-center">
                <form className="bg-white rounded-lg w-[500px] h-auto p-5">
                    <h1>Login</h1>
                </form>
            </main>
            
        </div>


        
    )
}