import PlanContent from "@components/PlanContent";

import { recoveryPlan } from "@constants/recoveryPlan";
import { pregnantPlan } from "@constants/pregnantPlan";
import { containerStyles } from "@styles/variables";
import { photo } from "./PlansSection.styled";
import { SetStateAction } from "react";

interface IPlansSection {
  setPickedCourse: React.Dispatch<SetStateAction<string>>;
}

const PlansSection: React.FC<IPlansSection> = ({ setPickedCourse }) => {
  return (
    <section>
      <div css={containerStyles}>
        <PlanContent plan={recoveryPlan} setPickedCourse={setPickedCourse} />
        <div css={photo}></div>
        <PlanContent plan={pregnantPlan} setPickedCourse={setPickedCourse} />
      </div>
    </section>
  );
};

export default PlansSection;
