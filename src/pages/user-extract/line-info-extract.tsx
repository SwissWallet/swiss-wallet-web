interface InfoExtractProps {
    icon: JSX.Element,
    value: string,
    date: string,
}

export function InfoExtract({ icon, value, date }: InfoExtractProps) {
    return (
        <div className="flex flex-col p-3 gap-2">
            <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left gap-2">
                <div className="flex items-center gap-2 text-xl md:text-2xl font-medium italic">
                    {icon}
                    <span>{value} pontos</span>
                </div>
                <p className="font-bold italic text-black text-opacity-75 text-sm md:text-base">{date}</p>
            </div> 
            <div className="w-full h-[1px] bg-slate-400" />
        </div>
    )
}
