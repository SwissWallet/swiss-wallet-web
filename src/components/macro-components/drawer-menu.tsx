import { Book, Coffee, Gift, Heart, House, ShoppingBag, ShoppingCart, User, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-swisswallet.png";
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
        dispatch(setUser({}))
        dispatch(setLogin(false))
        localStorage.clear();
    }

    return (
        <div className={`fixed z-50 p-5 bg-red-gradient h-full w-auto top-0 ${isOpen ? 'right-0' : '-right-60'}`}>
            <div className="flex w-full justify-end">
                {/* <img className="w-60" src={logo} alt="logotipo SwissWallet" /> */}
                <button onClick={closeSettings}>
                    <X className="size-5 text-white font-medium mb-2 hover:scale-150 ease-in-out duration-300" />
                </button>
            </div>
            <div className="bg-white w-full h-[1px]" />
            <div className="w-full flex justify-center items-center text-center">
                <nav>
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
                    <Link to={'/card-point'}>
                        <div className="flex justify-center items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100">
                            <User className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Depósito
                            </span>
                        </div>
                    </Link>
                    <Link to={'/favorites'}>
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
                    <Link to={'/orders'}>
                        <div className="flex justify-center items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100">
                            <ShoppingCart className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Pedidos
                            </span>
                        </div>
                    </Link>
                    <Link to={'/list-product'}>
                        <div className="flex justify-center items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100">
                            <ShoppingCart className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Lista de Produtos
                            </span>
                        </div>
                    </Link>
                    <Link to={'/add-product'}>
                        <div className="flex justify-center items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100">
                            <ShoppingCart className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Adicionar novo produto
                            </span>
                        </div>
                    </Link>
                    <button onClick={openDepositModal}>
                        <div className="flex justify-center items-center space-x-2 p-3 hover:scale-110 ease-in-out duration-100">
                            <ShoppingCart className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Deposito Modal
                            </span>
                        </div>
                    </button>
                </nav>
            </div>

            <div className="bg-white w-full h-[1px] mt-1" />

            <div className="flex mt-3 space-x-5 items-center">

                <div className="bg-gradient-to-t from-slate-700 to-black flex justify-center items-center rounded-full w-14 h-14 ">
                    <User className="size-10 text-white" />
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-white font-medium text-base">{user.user.name}</h1>
                        <p className="text-zinc-400 font-light text-xs">{user.user.username}</p>

                    </div>
                    <button onClick={logoutUser}>
                        <div className="">
                            <p className="text-white underline font-medium text-lg">sair</p>
                        </div>
                    </button>
                </div>

            </div>

            {isOpenDepositModal && <DepositModal closeDepositModal={closeDepositModal} />}

        </div>
    )
}