import { ChevronLeft } from "lucide-react";

export function BackButton({...props}){
    return(
                    <div className=" flex items-center justify-start">
                        <button {...props} className="rounded-full bg-default-red hover:bg-red-700 w-8 h-8 flex items-center justify-center">
                            <ChevronLeft className="size-6 text-white " />
                        </button>
                    </div>
    )
}