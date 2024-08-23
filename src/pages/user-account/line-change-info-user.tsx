import { useState } from "react";


interface InfoUserProps {
    label: string,
    value: string,
    isEditable: boolean;
    onChange: (newValue: string) => void;
}


export function ChangeInfoUser({
    label,
    value,
    isEditable,
    onChange,
}: InfoUserProps) {

    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
    };

    return (
        <div className="flex flex-col p-5 gap-4">

            <div className="flex justify-between">
                <h3 className="flex flex-1 text-nowrap text-xl font-medium">{label}:</h3>
                {isEditable ? (
                    <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    className="text-2xl font-semibold w-full p-2 border border-gray-300 rounded-md"
                />
                ) : (
                <div className="flex w-full justify-center">
                    <h1 className="text-2xl font-semibold">{value}</h1>
                </div>
                )}
            </div>

            <div className="w-full h-[1px] bg-slate-400 " />

        </div>
    )
}