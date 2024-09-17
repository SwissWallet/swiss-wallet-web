import { Image } from "lucide-react";

export function NoProducts(){
    return(
        <div className="w-full flex flex-col justify-center items-center mb-24">
            <Image className="size-32 text-zinc-500" />
            <span className="font-medium text-zinc-500 text-2xl">Sem produtos</span>
        </div>
    )
};