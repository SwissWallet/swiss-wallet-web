import logo from "../../assets/images/logo-swisswallet.png"


export function Navbar(){
    return(
        <>
        <header className="bg-red-gradient flex flex-col">
            <nav className="flex justify-between items-center p-10 text-white text-2xl px-24 font-semibold">
                <img src={logo} alt="teste" />
                <a>Swiss Store</a>
                <a>Biblioteca</a>
                <a>Cantina</a>
            </nav>
        </header>
            <section className="flex justify-center -mt-5 ">
                <div className="bg-white text-black p-10 w-[600px] font-bold rounded-xl shadow-lg">
                    <h4 className="">Saldo</h4>
                    <div className="flex justify-between pt-2">
                        <h1 className="text-xl font-extrabold">Pontos<span>     8409382</span></h1>
                        <img src="" alt="" />
                        <div>
                            <p>ver extrato</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}