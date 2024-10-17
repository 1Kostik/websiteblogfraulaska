import React from "react";
import { H3, P1, P2, TitleWrapper, Wrapper } from "./CardItem.styled";
import { Feedback } from "Interfaces/Product";

interface Props {
  text: Feedback;
}

export const CardItem: React.FC<Props> = ({ text }) => {
  const { id, name, profession, review } = text;
  return (
    <>
      <Wrapper key={id}>
        <TitleWrapper>
          <H3>{name}</H3>
          <P1>{profession}</P1>
        </TitleWrapper>
        <P2>{review}</P2>
      </Wrapper>
    </>
  );
};
