import { Check } from "lucide-react";
import { useState } from "react"

export function Checkbox(){

    const [ filled, setFilled ] = useState(false);

    return(
        <button onClick={() => setFilled(!filled)} 
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
                onChange={() => setFilled(!filled)}
            />
        </button>
    )
};