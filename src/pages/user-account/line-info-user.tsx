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
            <div className="flex flex-col sm:flex-row sm:justify-between">
                <h3 className="text-lg sm:text-xl font-medium whitespace-nowrap">{label}:</h3>
                <div className="flex sm:w-full sm:justify-center mt-2 sm:mt-0">
                    <h1 className="text-xl sm:text-2xl font-semibold">{value}</h1>
                </div>
            </div>
            <div className="w-full h-[1px] bg-slate-400" />
        </div>
    );
}
