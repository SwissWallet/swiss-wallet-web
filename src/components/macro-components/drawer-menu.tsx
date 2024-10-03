import { Book, Coffee, Gift, Heart, House, Landmark, ShoppingBag, ShoppingBasket, ShoppingCart, User, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLogin } from "../../features/login-slice";
import { setUser } from "../../features/user-slice";
import { RootState } from "../../store";
import { useState } from "react";
import { DepositModal } from "./deposit-modal";

interface DrawerMenuProps {
    isOpen: boolean,
    closeSettings: () => void;
}

export function DrawerMenu({
    isOpen,
    closeSettings
}: DrawerMenuProps) {

    const [isOpenDepositModal, setIsOpenDepositModal] = useState(false);

    function openDepositModal() {
        setIsOpenDepositModal(true);
    }

    function closeDepositModal() {
        setIsOpenDepositModal(false);
    }

    const dispatch = useDispatch();

    const user = useSelector((state: RootState) => state.authUser.value);

    function logoutUser() {
        localStorage.clear();
        dispatch(setUser({}))
        dispatch(setLogin(false))
    }

    const role = user.user.role;
    const isClient = role === "ROLE_CLIENT"

    return (
        <div className={`fixed z-50 p-5 bg-red-gradient h-full w-[20%] top-0 transition duration-1000 ${isOpen ? 'right-0' : '-right-60'}`}>
            <div className="flex justify-end pb-3">
                {/* <img className="w-60" src={logo} alt="logotipo SwissWallet" /> */}
                <button onClick={closeSettings}>
                    <X className="size-5 text-white font-medium hover:scale-150 ease-in-out duration-300" />
                </button>
            </div>
            <div className="bg-white w-full h-[1px]" />
            <div className="w-full flex justify-center mt-5 mb-5">
                <nav className="flex flex-col items-center justify-between">
                    <Link to={'/home'}>
                        <div className="flex justify-center items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100">
                            <House className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Home
                            </span>
                        </div>
                    </Link>
                    <Link to={'/store'}>
                        <div className="flex justify-center items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100">
                            <ShoppingBag className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Store
                            </span>
                        </div>
                    </Link>
                    <Link to={'/library'}>
                        <div className="flex justify-center items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100">
                            <Book className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Biblioteca
                            </span>
                        </div>
                    </Link>
                    <Link to={'/canteen'}>
                        <div className="flex justify-center items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100">
                            <Coffee className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Cantina
                            </span>
                        </div>
                    </Link>
                    <Link to={'/account'}>
                        <div className="flex justify-center items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100">
                            <User className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Conta
                            </span>
                        </div>
                    </Link>
                    <Link className={`${isClient ? "block" : "hidden"}`} to={'/favorites'}>
                        <div className="flex justify-center items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100">
                            <Heart className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Favoritos
                            </span>
                        </div>
                    </Link>
                    <Link to={'/benefits'}>
                        <div className="flex justify-center items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100">
                            <Gift className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Beneficios
                            </span>
                        </div>
                    </Link>
                    <button className={`${isClient ? "hidden" : "block"}`} onClick={openDepositModal}>
                        <div className="flex justify-center items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100">
                            <Landmark className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Deposito
                            </span>
                        </div>
                    </button>
                    <Link to={'/orders'}>
                        <div className="flex justify-center items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100">
                            <ShoppingCart className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Pedidos
                            </span>
                        </div>
                    </Link>
                    <Link className={`${isClient ? "hidden" : "block"}`} to={'/list-product'}>
                        <div className="flex justify-center items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100">
                            <ShoppingBasket className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Produtos
                            </span>
                        </div>
                    </Link>
                    <Link className={`${isClient ? "hidden" : "block"}`} to={'/payment'}>
                        <div className="flex justify-center items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100">
                            <ShoppingBasket className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Pagamentos
                            </span>
                        </div>
                    </Link>
                </nav>
            </div>
            <div className="bg-white w-full h-[1px]" />
            <div className="flex items-center mt-5 flex-col justify-center gap-5">
                <div className="bg-gradient-to-t from-slate-700 to-black flex justify-center items-center rounded-full w-14 h-14 ">
                    <User className="size-10 text-white" />
                </div>
                <div className="flex flex-col justify-centeritems-center">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-white font-medium text-base">{user.user.name}</h1>
                        <p className="text-zinc-400 font-light">{user.user.username}</p>
                    </div>
                    <button onClick={logoutUser}>
                        <div>
                            <p className="text-white underline font-medium text-lg hover:text-[#8b8b8b]">sair</p>
                        </div>
                    </button>
                </div>
            </div>
            {isOpenDepositModal && <DepositModal closeDepositModal={closeDepositModal} />}
        </div>
    )
}