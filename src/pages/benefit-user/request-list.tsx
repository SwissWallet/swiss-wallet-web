import { Benefit } from ".";
import { BenefitCardRequest } from "../../components/macro-components/benefit-card-request";

interface RequestListProps {
    benefitsRequest: Benefit[],
    deleteRequest: (id: string) => void;
};

export function RequestList({
    benefitsRequest,
    deleteRequest,
}: RequestListProps){
    return (
        benefitsRequest.map((benefit: Benefit) => (
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
        
    )
};