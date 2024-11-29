import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { PenBox } from "lucide-react";
import { ChangedStatusModal } from "./changed-status-modal";

interface BenefitCardRequestsProps {
  id: string;
  idReq: string;
  userId: string;
  name: string;
  title: string;
  status: string;
  dateTime: string;
  description: string;
  getRequests: () => void;
}

export function BenefitCardRequests({
  id,
  idReq,
  name,
  title,
  status,
  dateTime,
  getRequests,
  description,
  userId,
}: BenefitCardRequestsProps) {

  const [ cStatus, setCStatus ] = useState(status);
  const [ isOpenChangedStatus, setIsOpenChangedStatus ] = useState<boolean>(false);

  async function changedStatusBenefit() {
    await api.put(`/v3/benefit/requests`, {
      idBenefit: idReq,
      status: cStatus
    })
    .catch((err) => console.log("error: \n", err))
  };

  useEffect(() => {
    changedStatusBenefit();
    getRequests();
    setIsOpenChangedStatus(false);
  }, [cStatus]);

  return (
    <section className="mx-4 sm:mx-6 lg:mx-12 xl:mx-20">
      <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md gap-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm sm:text-base font-medium border-b-2 pb-2">
          <h1 className="text-lg sm:text-2xl font-bold">{name}</h1>
          <h1 className="text-sm sm:text-lg">{dateTime}</h1>
        </div>
        <h1 className="text-lg sm:text-xl font-semibold">{title}</h1>
        <p className="w-full text-sm sm:text-base italic px-3 sm:px-10">
          {description}
        </p>
        <div className="flex justify-end items-center gap-3">
          <h1 className="text-end text-sm sm:text-lg font-medium">
            status: <span className="text-red-600">{cStatus}</span>
          </h1>
          <button onClick={() => setIsOpenChangedStatus(true)} className="bg-default-red p-1 rounded-md hover:bg-red-700">
            <PenBox className="text-white"/>
          </button>
        </div>
      </div>

      { isOpenChangedStatus && ( 
        <ChangedStatusModal 
          setCStatus={setCStatus}
          setIsOpenChangedStatus={setIsOpenChangedStatus}
          idBenefit={id}
          userId={userId}
        />
      )}
    </section>
  );
}
