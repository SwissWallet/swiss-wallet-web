import { ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const UserInputChildrenVariants = tv({
    base: 'text-lg font-medium ',
    
    variants:{
        
        position: {
            start: 'text-start',
            center: 'text-center',
        }, 
    },
    
    defaultVariants: {
        position: 'start',
    }
})


interface UserInputProps 
        extends React.InputHTMLAttributes<HTMLInputElement>, 
                VariantProps<typeof UserInputChildrenVariants> {
    children: ReactNode,
    isVisibleSvgIcon?: boolean,
    svgIcon?: ReactNode,
}

export function UserInput({
    children,
    position,
    isVisibleSvgIcon,
    svgIcon,
    ...props
}:UserInputProps){

    return(
        <div className="flex flex-col gap-3 flex-1">
            <h3 className={UserInputChildrenVariants({position})}>{children}</h3>

            <div className="flex justify-end items-center text-zinc-700">
                {isVisibleSvgIcon && (
                    <div className="absolute p-3">
                        {svgIcon}
                    </div>
                )}
                <input {...props}
                    className={`w-full outline-none rounded-md p-2  border-2 border-zinc-300  font-medium placeholder-slate-400
                    focus:not-italic focus:border-red-600 placeholder:font-light placeholder:italic`}
                />
            </div>
        </div>
    )
}