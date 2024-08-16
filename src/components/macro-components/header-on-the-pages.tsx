import { ArrowDownNarrowWide, Filter } from "lucide-react";

interface HeaderOnPagesProps{
    title: string,
    description: string,
}

export function HeaderOnPages({
    title,
    description,
}:HeaderOnPagesProps){
    return(
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-bold">{title}</h1>
                        <p className="italic font-medium">{description}</p>
                    </div>
                    <div className="flex gap-10">
                        <button>
                            <div className="flex gap-2 text-zinc-500 hover:text-zinc-700">
                                <Filter />
                                <p className="font-medium">Filtrar</p>
                            </div>
                        </button>
                        <button>
                            <div className="flex gap-2 text-zinc-500 hover:text-zinc-700">
                                <ArrowDownNarrowWide />
                                <p className="font-medium">Ordenar</p>
                            </div>
                        </button>
                    </div>
                </div>
    )
}