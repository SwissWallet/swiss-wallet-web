interface UserInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: string,
}

export function UserInput({
    children,
    ...props
}:UserInputProps){
    return(
        <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium">{children}</h3>
            <input {...props}
                className="outline-none rounded-md p-2 w-full border-2 border-zinc-300  font-medium placeholder-slate-400
                focus:not-italic focus:border-red-600 placeholder:font-light placeholder:italic" 
            />
        </div>
    )
}