import { Link } from "react-router-dom"
import logo from "../../assets/images/logo-swisswallet.png"
import { Book, Coffee, Gift, Heart, House, ShoppingBag, ShoppingCart, User, X } from "lucide-react"

interface DrawerMenuProps{
    isOpen: boolean,
    closeSettings: () => void;
}

export function DrawerMenu({
    isOpen,
    closeSettings
}:DrawerMenuProps){

    return(
        <div className={`absolute z-50 p-10 bg-red-gradient h-screen w-auto top-0 transition duration-1000 ${isOpen ? 'right-0' : '-right-60'}` }>
            <div className="flex">
                <img  className="w-60" src={logo} alt="logotipo SwissWallet" />
                <button onClick={closeSettings}>
                    <X className="size-5 text-white font-medium"/>
                </button>
            </div>
            <div className="bg-white w-full h-[1px]" />
            <div className="w-full flex justify-center mt-5 mb-5">
                <nav>
                    <Link to={'/home'}>
                        <div className="flex justify-center items-center space-x-2 p-3">
                            <House className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Home
                            </span>
                        </div>
                    </Link>
                    <Link to={'/store'}>
                        <div className="flex justify-center items-center space-x-2 p-3">
                            <ShoppingBag className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Store
                            </span>
                        </div>
                    </Link>
                    <Link to={'/library'}>
                        <div className="flex justify-center items-center space-x-2 p-3">
                            <Book className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Biblioteca
                            </span>
                        </div>
                    </Link>
                    <Link to={'/canteen'}>
                        <div className="flex justify-center items-center space-x-2 p-3">
                            <Coffee className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Cantina
                            </span>
                        </div>
                    </Link>
                    <Link to={'/account'}>
                        <div className="flex justify-center items-center space-x-2 p-3">
                            <User className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Conta
                            </span>
                        </div>
                    </Link>
                    <Link to={'/favorites'}>
                        <div className="flex justify-center items-center space-x-2 p-3">
                            <Heart className="text-white size-5 font-bold" />
                            <span className="text-white font-medium">
                                Favoritos
                            </span>
                        </div>
                    </Link>
                        <Link to={'/benefits'}>
                            <div className="flex justify-center items-center space-x-2 p-3">
                                <Gift className="text-white size-5 font-bold" />
                                <span className="text-white font-medium">
                                    Beneficios
                                </span>
                            </div>
                        </Link>
                        <Link to={'/orders'}>
                            <div className="flex justify-center items-center space-x-2 p-3">
                                <ShoppingCart className="text-white size-5 font-bold" />
                                <span className="text-white font-medium">
                                    Pedidos
                                </span>
                            </div>
                        </Link>
                </nav>
            </div>

            <div className="bg-white w-full h-[1px]" />

            <div className="flex mt-5 space-x-5 ">

                <div className="bg-gradient-to-t from-slate-700 to-black flex justify-center items-center rounded-full w-14 h-14 ">
                    <User className="size-10 text-white"/>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-white font-medium text-xl">NomeUsuario</h1>
                        <p className="text-zinc-400 font-light">username@senaisp</p>

                    </div>
                    <Link to={'/'}>
                        <div className="mt-4">
                            <p className="text-white underline font-medium text-lg">sair</p>
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    )
}