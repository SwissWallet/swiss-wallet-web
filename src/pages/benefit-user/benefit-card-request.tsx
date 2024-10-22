import { X } from "lucide-react";

interface BenefitCardActiveProps{
    id: string;
    status: string;
    dateTime: string;
    benefitId: string;
    benefitTitle: string;
    benefitDescription: string;
}


export function BenefitCardRequest({
    status,
    dateTime,
    benefitDescription,
    benefitTitle,
}: BenefitCardActiveProps){

    return(
        <section className="ml-20 mr-20">
            <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md gap-6">
                <div className="flex flex-col justify-start gap-3">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-semibold">{benefitTitle}</h1>
                        <div className="flex gap-3">
                            <h1 className="text-2xl font-semibold">{dateTime}</h1>
                            <button className="bg-red-600 hover:bg-red-700 hover:scale-110 transition-all rounded-full p-1">
                                <X className="text-white"/>
                            </button>
                        </div>
                    </div>
                    <p className="w-full overflow-hidden italic font-medium px-10">{benefitDescription}</p>
                </div>
                <div className="flex justify-end">
                    <h1 className="text-2xl font-semibold ">
                        Status: 
                        <span className="text-red-600">  {status}</span>
                    </h1>
                </div>
            </div>
        </section>
    )
};