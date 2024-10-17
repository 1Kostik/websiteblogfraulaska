import React from "react";
import { buttonStyle, wrapper } from "./StatusWarningModal.styled";

interface StatusWarningProps {
  name: number | null;
  updateStatus: () => void;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const StatusWarningModal: React.FC<StatusWarningProps> = ({
  name,
  updateStatus,
  setIsOpen,
}) => {
  const handleOnClick = () => {
    updateStatus();
    setIsOpen && setIsOpen(false);
  };
  return (
    <div css={wrapper}>
      <h2>Ви збираєтесь відхилити замовлення!</h2>
      <p>При відхилинні замовлення, буде не дійсним! !!!</p>
      <p>Підтвердіть відхилиння замовлення номер:</p>
      <span>{name}</span>
      <button type="button" onClick={handleOnClick} css={buttonStyle}>
        Підтвердіть
      </button>
    </div>
  );
};

export default StatusWarningModal;
