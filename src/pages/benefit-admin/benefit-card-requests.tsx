interface BenefitCardRequestsProps{
    title: string;
    description: string;
    status: string;
    dateTime: string;
    name: string;
}


export function BenefitCardRequests({
  name,
  title,
  status,
  dateTime,
  description,
}: BenefitCardRequestsProps){
    return(
        <section className="ml-20 mr-20">
      <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md gap-6">
        <div className="flex flex-col justify-start gap-3">
          <div className="flex justify-between text-xl font-medium border-b-2 pb-2">
            <h1 className="text-2xl font-bold">{name}</h1>
            <h1>{dateTime}</h1>
          </div>
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="w-full overflow-hidden italic px-10">
              {description}
            </p>
            <h1 className="text-end text-xl font-medium">status: <span className="text-red-600 ">{status}</span></h1>
        </div>
        
      </div>
    </section>
    )
};