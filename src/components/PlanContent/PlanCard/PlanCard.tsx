import React, { SetStateAction } from "react";
import { nanoid } from "nanoid";

import { cardContainer, infoWrapper } from "./PlanCard.styled";

import { IContent } from "@constants/recoveryPlan";
import { ReactComponent as CheckedIcon } from "@assets/icons/checked.svg";

interface IPlanCardProps {
  content: IContent;
  cardHeight: number | undefined;
  setPickedCourse: React.Dispatch<SetStateAction<string>>;
}

const PlanCard: React.FC<IPlanCardProps> = ({
  content,
  cardHeight,
  setPickedCourse,
}) => {
  const { contentTitle, price, info } = content;

  return (
    <div css={cardContainer(cardHeight)}>
      <h3>{contentTitle}</h3>
      <p>{price}</p>
      <a href="#registrationForm" onClick={() => setPickedCourse(contentTitle)}>
        Зареєструватись
      </a>
      {info.map((item) => {
        return (
          <div key={nanoid()} css={infoWrapper}>
            <CheckedIcon />
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PlanCard;
