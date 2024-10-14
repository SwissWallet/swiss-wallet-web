import { ReactNode } from "react";

interface KeyValue {
    key: string;
    value: string;
}
interface UserSelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement>{
    children?: ReactNode;
    firstMessage: string;
    options: KeyValue[];
}

export function UserSelect({
    children,
    firstMessage,
    options,
    ...props
}: UserSelectProps) {
    return (
        <div className="flex flex-col gap-3 flex-1">
            <h3 className={`text-lg font-medium text-start`}>{children}</h3>

            <div className="flex justify-end items-center text-zinc-700">
                <select
                    {...props}
                    className={`w-full outline-none rounded-md p-2 border-2 border-zinc-300 font-medium
                    placeholder-slate-400 focus:not-italic focus:border-red-600`}
                >
                    <option value="" disabled selected>{firstMessage}</option>
                    {options.map((item) => (
                        <option value={item.key}>{item.value}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}
