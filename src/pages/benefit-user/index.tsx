import { useEffect, useState } from "react";
import { Footer } from "../../components/macro-components/footer";
import { HeaderOnPages } from "../../components/macro-components/header-on-the-pages";
import { Navbar } from "../../components/macro-components/navbar";
import { api } from "../../lib/axios";
import { NoProducts } from "../../components/micro-components/no-products";
import { BenefitCardActive } from "../../components/macro-components/benefit-card-active";
import { BenefitCardRequest } from "../../components/macro-components/benefit-card-request";
import { RadioButton } from "../../components/micro-components/radio-button";

interface benefit {
  id: string;
  title: string;
  description: string;
  status?: string;
  dateTime?: string;
  benefitActive?: {
    id: string;
    title: string;
    description: string;
  };
}

export function BenefitUser() {
  const [benefitsActive, setBenefitsActive] = useState<benefit[]>([]);
  const [benefitsRequest, setBenefitsRequest] = useState<benefit[]>([]);
  const [selectedOption, setSelectedOption] = useState("ATIVOS");

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  async function getBenefit() {
    api.get(`/v3/benefit/requests/current`).then((json) => {
      const data = json.data;
      setBenefitsActive(
        data.activeResponseDtos.map((benefit: benefit) => ({
          id: benefit.id,
          title: benefit.title,
          description: benefit.description,
        }))
      );
      setBenefitsRequest(
        data.reqResponseDtos.map((benefit: benefit) => ({
          id: benefit.id,
          status: benefit.status,
          dateTime: benefit.dateTime,
          benefitActive: {
            id: benefit.benefitActive.id,
            title: benefit.benefitActive.title,
            description: benefit.benefitActive.description,
          },
        }))
      );
    });
  };

  async function deleteRequest(id: string){
    api.delete(`/v3/benefit/requests/${id}`)
    .then(() => getBenefit())
    .catch((err) => console.log(err))
  };

  useEffect(() => {
    getBenefit();
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
            options={["ATIVOS", "SOLICITADOS"]}
          />
        </div>

        <div className="flex flex-col items-center">
          {selectedOption === "ATIVOS" ? (
            benefitsActive.length === 0 ? (
              <NoProducts />
            ) : (
              benefitsActive.map((benefit) => (
                <BenefitCardActive
                  key={benefit.id}
                  id={benefit.id}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))
            )
          ) : benefitsRequest.length === 0 ? (
            <NoProducts />
          ) : (
            benefitsRequest.map((benefit) => (
              <BenefitCardRequest
                key={benefit.id}
                id={benefit.id}
                status={
                  benefit.status === "SENT"
                    ? "ENVIADO"
                    : benefit.status === "NOT_APPROVED"
                    ? "NÃO APROVADO"
                    : "APROVADO"
                }
                deleteRequest={deleteRequest}
                dateTime={benefit.dateTime || ""}
                benefitId={benefit.benefitActive?.id || ""}
                benefitTitle={benefit.benefitActive?.title || ""}
                benefitDescription={benefit.benefitActive?.description || ""}
              />
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
