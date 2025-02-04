import { MainButton } from "../micro-components/main-button";
import { api } from "../../lib/axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Trash2 } from "lucide-react";

interface BenefitCardActiveProps {
  id: string;
  title: string;
  description: string;
  getBenefit?: () => void;
  getBenefits?: () => void;
}

export function BenefitCardActive({
  id,
  title,
  description,
  getBenefit,
  getBenefits,
}: BenefitCardActiveProps) {
  
  const user = useSelector((state: RootState) => state.authUser.value);
  const role = user.user.role;
  const isClient = role === "ROLE_CLIENT";
  
  async function delBenefit(id: string) {
    await api
      .delete(`/v3/benefit/actives/${id}`)
      .then(() => getBenefits!())
      .catch((err) => console.log("error \n", err))
  };

  async function addRequest(id: string) {
    await api
      .post(`/v3/benefit/requests`, {
        idBenefit: id,
      })
      .then(() => getBenefit!())
      .catch((err) => console.log(err));
  }

  return (
    <section className="mx-4 sm:mx-6 lg:mx-20">
      <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md gap-6">
        <div className="flex flex-col justify-start gap-3">
          {isClient ? (
            <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>
          ) : (
            <div className="flex justify-between items-center">
              <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>
              <button onClick={() => delBenefit(id)}>
                <Trash2 className="text-lg sm:text-xl text-red-600 hover:scale-110 hover:text-red-700 transition-all"/>
              </button>
            </div>
          )}
          <p className="w-full overflow-hidden sm:overflow-ellipsis break-words italic font-medium px-3 sm:px-10 text-sm sm:text-base">
            {description}
          </p>
        </div>
        {isClient && (
          <div className="flex justify-end">
            <div className="flex gap-5 sm:gap-10 items-center">
              <MainButton onClick={() => addRequest(id)} width="min">
                Solicitar benefício
              </MainButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
