import { ChevronRight, Eye, EyeOff, Menu, Settings, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-swisswallet.png";
import { DrawerMenu } from "./drawer-menu";


export function Navbar() {

    const [isVisibleScore, setIsVisibleScore] = useState(false);
    const [openSettingsModal, setOpenSettingsModal] = useState(false);
    const [ isOpenMenu, setIsOpenMenu ] = useState(false);

    function openSettings() {
        setOpenSettingsModal(true)
    }

    function closeSettings() {
        setOpenSettingsModal(false)
    }

    function handdleVisibleScore() {
        setIsVisibleScore(!isVisibleScore)
    }


    return (
        <header>





            <div className="bg-red-gradient flex justify-between p-5">
                <Link to={'/home'}>
                    <img src={logo} alt="teste" />
                </Link>





                <nav className="flex justify-between items-center gap-14 px-14 text-2xl font-medium text-white">
                    <Link to={'/store'} className=" hover:text-zinc-400">Swiss Store</Link>
                    <Link to={'/library'} className=" hover:text-zinc-400">Biblioteca</Link>
                    <Link to={'/canteen'} className=" hover:text-zinc-400">Cantina</Link>
                    <button onClick={openSettings} className=" hover:text-zinc-400"> <Settings className="size-8" /> </button>
                </nav>

                <div className="block md:hidden">
                    <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        <Menu className={`${isOpenMenu ? "hidden" : "block" }`} />
                        <X className={`${isOpenMenu ? "block" : "hidden"}`} />
                    </button>
                </div>

                
            </div>









            <div className="flex justify-center -mt-7 ">
                <div className="bg-white text-black p-10 w-[600px] font-bold rounded-xl shadow-xl">

                    <div className="flex justify-between">
                        <h4>Saldo</h4>
                        <Link to={'/extract'} className="flex hover:scale-110 ease-in-out duration-75">
                            <p>ver extrato</p>
                            <ChevronRight className="hover:scale-110 ease-in-out duration-75" />
                        </Link>
                    </div>

                    <div className="flex justify-between pt-2">
                        <div className="flex items-center gap-4">
                            <span className="text-xl font-bold">Pontos</span>
                            <input
                                className="focus:outline-none w-auto text-xl font-bold bg-transparent"
                                disabled
                                value={123456}
                                type={isVisibleScore ? 'text' : 'password'}
                            />

                        </div>
                        <button onClick={handdleVisibleScore} className="px-3">
                            {isVisibleScore ? <Eye className="hover:scale-110 ease-in-out duration-75" /> : <EyeOff className="hover:scale-110 ease-in-out duration-75" />}
                        </button>
                    </div>
                </div>
            </div>

            {openSettingsModal && (
                <DrawerMenu
                    isOpen={openSettingsModal}
                    closeSettings={closeSettings}
                />
            )}
        </header>
    )
}