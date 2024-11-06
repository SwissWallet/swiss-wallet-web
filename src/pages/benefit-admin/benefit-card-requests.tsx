interface BenefitCardRequestsProps {
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
}: BenefitCardRequestsProps) {
  return (
    <section className="mx-4 sm:mx-6 w-full lg:mx-12 xl:mx-20">
      <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md gap-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm sm:text-base font-medium border-b-2 pb-2">
          <h1 className="text-lg sm:text-2xl font-bold">{name}</h1>
          <h1 className="text-sm sm:text-lg">{dateTime}</h1>
        </div>
        <h1 className="text-lg sm:text-xl font-semibold">{title}</h1>
        <p className="w-full text-sm sm:text-base italic px-3 sm:px-10">
          {description}
        </p>
        <h1 className="text-end text-sm sm:text-lg font-medium">
          status: <span className="text-red-600">{status}</span>
        </h1>
      </div>
    </section>
  );
}
