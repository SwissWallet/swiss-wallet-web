interface InfoExtractProps {
    icon: JSX.Element,
    value: string,
    date: string,
}

export function InfoExtract({ icon, value, date }: InfoExtractProps) {
    return (
        <div className="flex flex-col p-3 gap-2">




            <div className="flex justify-between items-center flex-col md:flex-row ">
                <h1 className="text-2xl font-medium italic hidden md:flex">{icon}{value} pontos</h1>
                
                    
                <h1 className="text-2xl font-medium italic flex md:hidden">{icon}{value}</h1>
                
                <p className="font-bold italic text-black text-opacity-75 text-center">{date}</p>
            </div>





            
            <div className="w-full h-[1px] bg-slate-400 " />





        </div>
    )
}