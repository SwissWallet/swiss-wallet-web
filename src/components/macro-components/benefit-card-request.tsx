import { X } from "lucide-react";

interface BenefitCardActiveProps{
    id: string;
    status: string;
    dateTime: string;
    benefitId: string;
    benefitTitle: string;
    deleteRequest: (id: string) => [];
    benefitDescription: string;
}

export function BenefitCardRequest({
    id,
    status,
    dateTime,
    benefitDescription,
    benefitTitle,
    deleteRequest,
}: BenefitCardActiveProps){

    return(
        <section className="mx-4 sm:mx-6 lg:mx-20">
            <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md gap-6">
                <div className="flex flex-col justify-start gap-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3">
                        <h1 className="text-xl sm:text-2xl font-semibold">{benefitTitle}</h1>
                        <div className="flex justify-between sm:gap-3 items-start sm:items-center w-full sm:w-auto">
                            <h1 className="text-sm sm:text-xl font-semibold text-gray-600">{dateTime}</h1>
                            <button onClick={() => deleteRequest(id)} className="bg-red-600 hover:bg-red-700 hover:scale-110 transition-all rounded-full p-1">
                                <X className="text-white"/>
                            </button>
                        </div>
                    </div>
                    <p className="w-full break-words overflow-hidden sm:overflow-ellipsis italic font-medium px-3 sm:px-10 text-sm sm:text-base">
                        {benefitDescription}
                    </p>
                </div>
                <div className="flex justify-end">
                    <h1 className="text-lg sm:text-2xl font-semibold ">
                        Status: 
                        <span className="text-red-600"> {status}</span>
                    </h1>
                </div>
            </div>
        </section>
    )
};
