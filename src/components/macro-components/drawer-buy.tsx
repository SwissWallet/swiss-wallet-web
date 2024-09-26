
interface DrawerBuyProps{
    openDrawerBuy: boolean;
}

export function DrawerBuy({
    openDrawerBuy
}: DrawerBuyProps){
    return(
        <div className={`fixed z-50 p-5 bg-red-gradient h-full w-[20%] top-0 transition duration-1000  ${openDrawerBuy ? 'right-0' : '-right-60'} `}>
            <h1>hello world</h1>
        </div>
    )
};