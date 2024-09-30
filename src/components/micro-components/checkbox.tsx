import { Check } from "lucide-react";
import { useState } from "react";

interface CheckboxProps{
    handleSelectProduct: (isSelect: boolean) => void;
};

export function Checkbox({
    handleSelectProduct,
}: CheckboxProps){

    const [ filled, setFilled ] = useState(false);

    function handleClick(){
        setFilled(!filled);
        handleSelectProduct(!filled);
    };

    return(
        <button onClick={handleClick} 
            className={`size-5 border border-zinc-400 rounded-md
            ${filled ? ("bg-red-700") : ("bg-transparent")}`}
        >
            <div className="size-full flex items-center">
                {filled ? (<Check className="size-5 text-white" />) : ("")}
            </div>
                <input 
                type="checkbox" 
                className="hidden" 
                checked={filled} 
                onChange={handleClick}
            />
        </button>
    )
};