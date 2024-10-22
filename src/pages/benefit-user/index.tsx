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
      console.log(data);
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
  }

  useEffect(() => {
    getBenefit();
  }, []);

  return (
    <div className="bg-default-gray">
      <Navbar />
      <main className="ml-20 mr-20 gap-20 flex flex-col mt-20 mb-20">
        <HeaderOnPages
          title="Beneficíos"
          description="Confira a lista de beneficios de assinantes da AAPM"
          notFilterAndOrder={true}
        />

        <RadioButton
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          options={["ATIVOS", "SOLICITADOS"]}
        />

        {selectedOption === "ATIVOS" ? (
          benefitsActive.length === 0 ? (
            <NoProducts />
          ) : (
            benefitsActive.map((benefit: benefit) => (
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
          benefitsRequest.map((benefit: benefit) => (
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
              dateTime={benefit.dateTime || ""}
              benefitId={benefit.benefitActive?.id || ""}
              benefitTitle={benefit.benefitActive?.title || ""}
              benefitDescription={benefit.benefitActive?.description || ""}
            />
          ))
        )}
      </main>
      <Footer />
    </div>
  );
}
