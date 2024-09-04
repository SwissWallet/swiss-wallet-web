interface InfoExtractProps{
    icon?: JSX.Element,
    value: string,
    time: string,
}

export function InfoExtract({icon,value,time}:InfoExtractProps){
    return(
                        <div className="flex flex-col p-3 gap-2">

                            <div className="flex items-center pl-8">
                                <div className="flex space-x-12">
                                    <div>{icon}</div>
                                    <h1 className="text-2xl font-medium italic">{value} pontos</h1>
                                </div> 

                                <div className="ml-auto">
                                    <p className="font-bold italic text-black text-opacity-75 ">{time}</p>
                                </div>

                            </div>

                            <div className="w-full h-[1px] bg-slate-400 " />

                        </div>
    )
}