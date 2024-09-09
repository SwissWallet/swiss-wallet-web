export function InProgress() {
    return (
        <div className="flex justify-center flex-col gap-3 h-full">

            <h1 className="text-zinc-400 italic text-center">Em andamento</h1>

            <div className="flex items-center justify-center">
                <div className="bg-yellow-500 rounded-full h-8 w-8"></div>
                <div className="bg-yellow-500 h-[2px] w-12"></div>
                <div className="bg-dark-gray rounded-full h-8 w-8"></div>
                <div className="bg-dark-gray h-[2px] w-12"></div>
                <div className="bg-dark-gray rounded-full h-8 w-8"></div>
            </div>

        </div>
    )
}