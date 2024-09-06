import { MainButton } from "../micro-components/main-button";

interface RowTableProps {
    image: string,
    title: string,
    value: string,
    id: string,
    openCardProduct: (id: string) => void
}

export default function RowTable({
    title,
    image,
    value,
    id,
    openCardProduct,
}: RowTableProps) {




    return (
        <div className="flex justify-between p-5 items-center gap-8 text-2xl font-bold mx-4 cursor-pointer hover:bg-[#f8f8f8] ease-in-out duration-75">
            <img src={image} alt="" className="w-20" />
            <p className="font-medium ">{title}</p>
            <p className="font-medium ">{value}</p>
            <MainButton width="min" onClick={() => openCardProduct(id)} >Selecionar</MainButton>
        </div>
    )
}