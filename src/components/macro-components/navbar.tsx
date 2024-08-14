import logo from "../../assets/images/logo-swisswallet.png"


export function Navbar(){
    return(
        <div>
            <nav className="flex bg-red-gradient justify-between p-5 items-center text-white text-2xl px-24 font-semibold">
                <img src={logo} alt="teste" />
                <a>Swiss Store</a>
                <a>Biblioteca</a>
                <a>Cantina</a>
            </nav>
        </div>
    )
}