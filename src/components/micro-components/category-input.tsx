import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const CateroryInputChildrenVariants = tv({
    base: 'text-lg font-medium',

    variants: {
        position: {
            start: 'text-start',
            center: 'text-center',
        },
    },

    defaultVariants: {
        position: 'start',
    }
});

interface UserSelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof CateroryInputChildrenVariants> {
    children?: ReactNode,
    isVisibleSvgIcon?: boolean,
    svgIcon?: ReactNode,
}

export function UserSelect({
    children,
    position,
    isVisibleSvgIcon,
    svgIcon,
    ...props
}: UserSelectProps) {
    return (
        <div className="flex flex-col gap-3 flex-1">
            <h3 className={CateroryInputChildrenVariants({ position })}>{children}</h3>

            <div className="flex justify-end items-center text-zinc-700">
                {isVisibleSvgIcon && (
                    <div className="absolute p-3">
                        {svgIcon}
                    </div>
                )}
                <select
                    {...props}
                    className={`w-full outline-none rounded-md p-2 border-2 border-zinc-300 font-medium
                    placeholder-slate-400 focus:not-italic focus:border-red-600`}
                >
                    <option value="" disabled selected>Selecione uma categoria</option>
                    <option value="STORE">LOJA</option>
                    <option value="LIBRARY">BIBLIOTECA</option>
                    <option value="CANTEEN">CANTINA</option>
                </select>
            </div>
        </div>
    );
}
