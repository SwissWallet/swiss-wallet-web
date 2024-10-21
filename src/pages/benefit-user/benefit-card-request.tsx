
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
                        <h1 className="text-2xl font-semibold">{dateTime}</h1>
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