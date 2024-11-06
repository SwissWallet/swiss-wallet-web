import { SquarePen } from "lucide-react";

export function UpdateButton({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button {...props} className="flex justify-center items-center h-10 w-10 bg-default-red rounded-lg hover:bg-red-700" >
            <div className="bg-transparent">
                <SquarePen className="text-white" />
            </div>
        </button>
    )
}