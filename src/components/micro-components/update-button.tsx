import { SquarePen } from "lucide-react";

interface   UpdateButtonProps{
    onClick: () => void;
    isDisabled?: boolean
}

export function UpdateButton({onClick, isDisabled = false}:UpdateButtonProps) {
    return (
        <div className="flex justify-center items-center h-10 w-10 bg-default-red rounded-lg hover:bg-red-700" >
            <button  onClick={isDisabled ? undefined: onClick} className="bg-transparent" disabled={isDisabled}>
                <SquarePen className="text-white" />
            </button>
        </div>
    )
}