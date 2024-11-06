import { MainButton } from "../micro-components/main-button";

interface RowTableProps {
    id: string,
    image: string,
    title: string,
    value: number,
    amount: string,
    openCardProduct: (id: string) => void
}

export default function RowTable({
    id,
    title,
    image,
    value,
    amount,
    openCardProduct,
}: RowTableProps) {

    return (
        <div className="flex justify-between p-5 items-center gap-8 text-2xl font-bold mx-4 hover:bg-[#f8f8f8] ease-in-out duration-75">
            <img src={image} alt="" className="w-1/12" />
            <p className="font-medium w-2/6">{title}</p>
            <p className="font-medium w-10 text-center">{value}</p>
            <p className="font-medium w-16 text-end">{amount}</p>
            <MainButton width="min" onClick={() => openCardProduct(id)} >Selecionar</MainButton>
        </div>
    )
}