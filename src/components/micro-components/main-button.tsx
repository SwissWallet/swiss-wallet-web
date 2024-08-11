interface MainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: string,
}

export function MainButton({ 
    children,
    ...props 
}:MainButtonProps){
    return(
        <button {...props} className="bg-default-red py-2 px-20 rounded-md hover:bg-red-700">
            <span className="font-medium text-white text-lg">{children}</span>
        </button>
    )
}