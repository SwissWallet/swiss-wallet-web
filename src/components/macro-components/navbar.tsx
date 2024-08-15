import { ChevronRight, Eye, EyeOff, Settings } from "lucide-react"
import logo from "../../assets/images/logo-swisswallet.png"
import { useState } from "react"


export function Navbar(){

    const [ isVisibleScore, setIsVisibleScore ] = useState(false);

    function handdleVisibleScore(){
        setIsVisibleScore(!isVisibleScore)
    }

    return(
        <header>
            <div className="bg-red-gradient flex justify-between p-5">
                <img src={logo} alt="teste" />
                <nav className="flex justify-between items-center gap-14 px-14 text-2xl font-medium text-white">
                    <a className=" hover:text-zinc-400">Swiss Store</a>
                    <a className=" hover:text-zinc-400">Biblioteca</a>
                    <a className=" hover:text-zinc-400">Cantina</a>
                    <a className=" hover:text-zinc-400"> <Settings className="size-8" /> </a>
                </nav>
            </div>
            <div className="flex justify-center -mt-7 ">
                <div className="bg-white text-black p-10 w-[600px] font-bold rounded-xl shadow-xl">
                    
                    <div className="flex justify-between">
                        <h4>Saldo</h4>
                        <div className="flex">
                            <p>ver extrato</p>
                            <ChevronRight />
                        </div>
                    </div>
                    
                    <div className="flex justify-between pt-2">
                        <div className="flex items-center gap-4">
                            <span className="text-xl font-bold">Pontos</span>
                            <input 
                                className="focus:outline-none w-auto text-xl font-bold bg-transparent"
                                disabled
                                value={123456}
                                type={ isVisibleScore ? 'text' : 'password'}
                            />
                            
                       </div>
                            <button onClick={handdleVisibleScore} className="px-3">
                                { isVisibleScore ? <Eye /> : <EyeOff />}
                            </button>
                    </div>
                </div>
            </div>
        </header>
    )
}