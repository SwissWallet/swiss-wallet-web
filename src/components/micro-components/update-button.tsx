import { SquarePen } from "lucide-react";

export function UpdateButton(){
    return(
        <div className="flex justify-center items-center h-10 w-10 bg-default-red rounded-lg hover:bg-red-700" >
            <button className="bg-transparent">
                <SquarePen className="text-white" />
            </button>
        </div>
    )
}