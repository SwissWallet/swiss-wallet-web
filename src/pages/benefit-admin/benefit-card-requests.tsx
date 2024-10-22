interface BenefitCardRequestsProps{
    title: string;
    description: string;
}


export function BenefitCardRequests({
    title,
    description,
}: BenefitCardRequestsProps){
    return(
        <section className="ml-20 mr-20">
      <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md gap-6">
        <div className="flex flex-col justify-start gap-3">
          
            <h1 className="text-2xl font-semibold">{title}</h1>
          
          <p className="w-full overflow-hidden italic font-medium px-10">
            {description}
          </p>
        </div>
        
      </div>
    </section>
    )
};