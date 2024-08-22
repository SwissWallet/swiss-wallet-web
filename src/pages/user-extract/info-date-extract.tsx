interface InfoDateExtractProps{
    date: string,
}

export function InfoDateExtract({date,}:InfoDateExtractProps){
    return(
        <div><p className="font-bold italic text-black text-opacity-75">{date}</p></div>
    )
}