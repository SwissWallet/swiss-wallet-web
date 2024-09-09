interface InfoUserProps {
    label: string,
    value?: string,
}

export function InfoUser({
    label,
    value,
}: InfoUserProps) {
    return (
        <div className="flex flex-col p-5 gap-4">

            <div className="flex justify-between">

                <h3 className="flex flex-1 text-nowrap text-xl font-medium">{label}:</h3>

                <div className="flex w-full justify-center">
                    <h1 className="text-2xl font-semibold">{value}</h1>
                </div>

            </div>

            <div className="w-full h-[1px] bg-slate-400 " />

        </div>
    )
}