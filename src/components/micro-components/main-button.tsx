import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const MainButtonVariants = tv({
    base: 'bg-default-red py-2 rounded-md hover:bg-red-700 ',

    variants: {

        width: {
            default: 'px-20',
            min: 'px-10'
        },

    },

    defaultVariants: {
        width: 'default',
    }
})
interface MainButtonProps extends ComponentProps<'button'>, VariantProps<typeof MainButtonVariants> {
    children: ReactNode,
}

export function MainButton({
    children,
    width,
    ...props
}: MainButtonProps) {
    return (
        <button {...props} className={MainButtonVariants({ width })}>
            <span className="font-medium text-white text-lg p-3 lg:p-3 text-center text-wrap" >{children}</span>
        </button>

    )
}