
interface CardProductProps{
    closeCardProduct: () => void,
}


export function CardProduct({
    closeCardProduct,
}:CardProductProps){
    return(
        <div className="block h-auto w-auto">
            <button onClick={closeCardProduct}>X</button>
        </div>
    )
}