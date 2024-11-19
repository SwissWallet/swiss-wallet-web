import { useEffect, useState } from "react";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { RadioButton } from "../../components/micro-components/radio-button";
import { api } from "../../lib/axios";
import { AvailableList } from "./available-list";
import { RequestList } from "./request-list";
import { ActiveList } from "./active-list";

export interface Benefit {
  id: string;
  title: string;
  description: string;
  status?: string;
  dateTime?: string;
  benefitActive?: {
    id: string;
    title: string;
    description: string;
  },
};

export interface ActivesProperties {
  id: string;
  user: {
      id: string;
      name: string;
  },
  value: number;
  expireDate: string;
  benefitActive: {
      id: string;
      title: string;
      description: string;
  },
};

type STATUS_SEARCH = | "ATIVOS" | "DISPONIVEL" | "SOLICITADOS";

enum SEARCH_STATUS {
  ATIVOS = "ATIVOS",
  DISPONIVEL = "DISPONIVEL",
  SOLICITADOS = "SOLICITADOS",
};

export function BenefitUser() {
  const [available, setAvailable] = useState<Benefit[]>([]);
  const [request, setRequest] = useState<Benefit[]>([]);
  const [actives, setActives] = useState<ActivesProperties[]>([]);
  const [selectedOption, setSelectedOption] = useState("DISPONIVEL");

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const getStatusSearch = (status: STATUS_SEARCH): JSX.Element | null => {
    const searchStatus: Record<SEARCH_STATUS, JSX.Element> = {
      [SEARCH_STATUS.ATIVOS]: 
        <ActiveList 
          benefitsActive={actives}
        />,
      [SEARCH_STATUS.DISPONIVEL]: 
        <AvailableList 
          benefitsAvailable={available}
          getBenefit={getBenefit}
        />,
      [SEARCH_STATUS.SOLICITADOS]: 
        <RequestList 
          benefitsRequest={request}
          deleteRequest={deleteRequest}
        />
    };

    return searchStatus[status] || null;
  };

  async function getBenefit() {
    api.get(`/v3/benefit/requests/current`).then((json) => {
      const data = json.data;
      setAvailable(
        data.activeResponseDtos.map((benefit: Benefit) => ({
          id: benefit.id,
          title: benefit.title,
          description: benefit.description,
        }))
      );
      setRequest(
        data.reqResponseDtos.map((benefit: Benefit) => ({
          id: benefit.id,
          status: benefit.status,
          dateTime: benefit.dateTime,
          benefitActive: {
            id: benefit.benefitActive!.id,
            title: benefit.benefitActive!.title,
            description: benefit.benefitActive!.description,
          },
        }))
      );
    });
  };

  async function getActives(){
    api.get(`/v3/benefits/current`)
    .then((json) => {
        const data = json.data;
        setActives(data.map((benefit: ActivesProperties) => ({
            id: benefit.id,
            user: {
                id: benefit.user.id,
                name: benefit.user.name
            },
            value: benefit.value,
            expireDate: benefit.expireDate,
            benefitActive: {
                id: benefit.benefitActiveResponseDt.id,
                title: benefit.benefitActiveResponseDt.title,
                description: benefit.benefitActiveResponseDt.description
            }
        })))
    })
};

  async function deleteRequest(id: string){
    api.delete(`/v3/benefit/requests/${id}`)
    .then(() => getBenefit())
    .catch((err) => console.log(err))
  };

  useEffect(() => {
    getBenefit();
    getActives();
  }, []);

  return (
    <div className="bg-default-gray min-h-screen">
      <Navbar />
      <main className="px-4 md:px-10 lg:px-20 flex flex-col gap-10 mt-10 md:mt-20 mb-10 md:mb-20">
        <HeaderOnPages
          title="Benefícios"
          description="Confira a lista de benefícios de assinantes da AAPM"
          notFilterAndOrder={true}
        />

        <div className="flex justify-center">
          <RadioButton
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
            options={["DISPONIVEL", "SOLICITADOS", "ATIVOS"]}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          {getStatusSearch(selectedOption)}
        </div>


      </main>
      <Footer />
    </div>
  );

}
