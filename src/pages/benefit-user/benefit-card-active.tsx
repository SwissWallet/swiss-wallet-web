interface BenefitCardActiveProps {
    value: number;
    expireDate: string;
    benefitTitle: string;
    benefitDescription: string;
};

export function BenefitCardActive({
    value,
    expireDate,
    benefitTitle,
    benefitDescription,
}: BenefitCardActiveProps){
    return(
        <section className="mx-4 sm:mx-6 lg:mx-20">
            <div className="* flex flex-col bg-white p-5 drop-shadow-custom rounded-md gap-6">
                <div className="flex flex-col justify-start gap-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm sm:text-base font-medium border-b-2 pb-2">
                        <h1 className="text-lg sm:text-2xl font-bold">{benefitTitle}</h1>
                        <h1 className="text-sm sm:text-lg">Expira em: {expireDate}</h1>
                    </div>
                    <p className="w-full overflow-hidden sm:overflow-ellipsis break-words italic font-medium px-3 sm:px-10 text-sm sm:text-base">
                        {benefitDescription}
                    </p>
                </div>
                <h1 className="flex justify-end items-center">Valor mensal: 
                    R$<strong className="text-red-600 text-md md:text-lg">{value}</strong>
                </h1>
                
            </div>
        </section>
    )
};