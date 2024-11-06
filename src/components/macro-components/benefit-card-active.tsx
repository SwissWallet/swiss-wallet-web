import { MainButton } from "../micro-components/main-button";
import { api } from "../../lib/axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Trash2 } from "lucide-react";

interface BenefitCardActiveProps {
  id: string;
  title: string;
  description: string;
  getBenefits: () => void;
}

async function addRequest(id: string) {
  await api
    .post(`/v3/benefit/requests`, {
      idBenefit: id,
    })
    .then(() => console.log("passou"))
    .catch((err) => console.log(err));
}



export function BenefitCardActive({
  id,
  title,
  description,
  getBenefits,
}: BenefitCardActiveProps) {
  
  const user = useSelector((state: RootState) => state.authUser.value);
  const role = user.user.role;
  const isClient = role === "ROLE_CLIENT";
  
  async function delBenefit(id: string) {
    await api
      .delete(`/v3/benefit/actives/${id}`)
      .then(() => getBenefits())
      .catch((err) => console.log("error \n", err))
  };

  return (
    <section className="ml-20 mr-20">
      <div className="flex flex-col bg-white p-5 drop-shadow-custom rounded-md gap-6">
        <div className="flex flex-col justify-start gap-3">
          {isClient ? (
            <h1 className="text-2xl font-semibold">{title}</h1>
          ) : (
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">{title}</h1>
              <button onClick={() => delBenefit(id)}>
                <Trash2 className="size-10 text-red-600 hover:scale-110 hover:text-red-700 transition-all"/>
              </button>
            </div>
          )}
          <p className="w-full overflow-hidden italic font-medium px-10">
            {description}
          </p>
        </div>
        {isClient && (
          <div className="flex justify-end">
            <div className="flex gap-10 items-center">
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
