import { Benefit } from "."
import { BenefitCardActive } from "../../components/macro-components/benefit-card-active"

interface AvailableListProps{
    benefitsAvailable: Benefit[],
    getBenefit: () => void;
};

export function AvailableList({
    benefitsAvailable,
    getBenefit,
}: AvailableListProps){
    return(
        benefitsAvailable.map((benefit: Benefit) => (
            <BenefitCardActive
              getBenefit={getBenefit}
              key={benefit.id}
              id={benefit.id}
              title={benefit.title}
              description={benefit.description}
            />
          ))
    )
};