import { ActivesProperties } from "."
import { BenefitCardActive } from "./benefit-card-active";

interface ActiveListProps{
    benefitsActive: ActivesProperties[],
};

export function ActiveList({
    benefitsActive,
}: ActiveListProps){
    return(
        benefitsActive.map((benefit: ActivesProperties) => (
            <BenefitCardActive 
                expireDate={benefit.expireDate}
                benefitTitle={benefit.benefitActive.title}
                benefitDescription={benefit.benefitActive.description}
                value={benefit.value}
            />
        ))
    )
};