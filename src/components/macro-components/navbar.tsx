import { ChevronRight, Eye, EyeOff, Menu, Settings, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-swisswallet.png";
import { DrawerMenu } from "./drawer-menu";
import { useSelector } from "react-redux";
import { RootState } from "../../store";


export function Navbar() {

    const [isVisibleScore, setIsVisibleScore] = useState(false);
    const [openSettingsModal, setOpenSettingsModal] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    function openSettings() {
        setOpenSettingsModal(true)
    }

    function closeSettings() {
        setOpenSettingsModal(false)
    }

    function handdleVisibleScore() {
        setIsVisibleScore(!isVisibleScore)
    }

    const user = useSelector((state: RootState) => state.authUser.value);
    const role = user.user.role

    const isClient = role === "ROLE_CLIENT";

    const { value } = useSelector((state: RootState) => state.authUser.value.account);

    return (
        <header>
            <div className="bg-red-gradient flex justify-between p-5">
                <Link to={'/home'}>
                    <img src={logo} alt="teste" />
                </Link>

                <nav className={`px-14 text-2xl font-medium text-white hidden lg:block`}>
                    <div className="flex justify-between items-center gap-14 h-full">
                        <Link to={'/store'} className=" hover:text-zinc-400">Swiss Store</Link>
                        <Link to={'/library'} className=" hover:text-zinc-400">Biblioteca</Link>
                        <Link to={'/canteen'} className=" hover:text-zinc-400">Cantina</Link>
                        <button onClick={openSettings} className=" hover:text-zinc-400"> <Settings className="size-8" /> </button>
                    </div>
                </nav>

                <div className="block lg:hidden text-white hover:text-zinc-400 px-14">
                    <button className="h-full" onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        <Menu className={` size-10 ${isOpenMenu ? "hidden" : "block"}`} />
                        <X className={` size-10 ${isOpenMenu ? "block" : "hidden"}`} />
                    </button>
                </div>

                {isOpenMenu && (<DrawerMenu isOpen={isOpenMenu} closeSettings={() => setIsOpenMenu(false)} />)}

            </div>

            <div className={`flex justify-center -mt-7 ${isClient ? "block" : "hidden"}`}>
                <div className="bg-white text-black p-10 w-[300px] flex flex-col justify-between font-bold rounded-xl shadow-xl lg:flex-row gap-2 lg:w-[600px]">

                    <div className="flex justify-between flex-col gap-5">
                        <h4>Saldo</h4>
                           <div className="flex">
                                <input
                                    className="focus:outline-none w-auto text-xl font-bold bg-transparent"
                                    disabled
                                    value={value}
                                    type={isVisibleScore ? 'text' : 'password'}
                                />
                                <button onClick={handdleVisibleScore} className="px-3 flex lg:hidden">
                                    {isVisibleScore ? <Eye className="hover:scale-110 ease-in-out duration-75" /> : <EyeOff className="hover:scale-110 ease-in-out duration-75" />}
                                </button>
                           </div>
                    </div>

                    <div className="flex justify-between pt-2 flex-col">
                        <div className="flex items-center gap-4">
                            <Link to={'/extract'} className="flex hover:scale-110 ease-in-out duration-75">
                            <p>ver extrato</p>
                            <ChevronRight className="hover:scale-110 ease-in-out duration-75" />
                        </Link>

                        </div>
                        <button onClick={handdleVisibleScore} className="px-3 hidden lg:flex">
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