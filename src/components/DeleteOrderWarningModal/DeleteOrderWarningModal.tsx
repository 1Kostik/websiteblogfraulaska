import React from "react";
import { buttonStyle, wrapper } from "./DeleteOrderWarningModal.styled";

interface DeleteOrderWarningModalProps {
  id: number | null;
  deleteOrder: (id: number) => void;
}

const DeleteOrderWarningModal: React.FC<DeleteOrderWarningModalProps> = ({
  id,
  deleteOrder,
}) => {
  return (
    <div css={wrapper}>
      <h2>Ви збираєтесь видалити замовлення!</h2>

      <p>Підтвердіть видалиння замовлення номер:</p>
      <span>{id}</span>
      <button
        type="button"
        onClick={() => deleteOrder(Number(id))}
        css={buttonStyle}
      >
        Підтвердіть
      </button>
    </div>
  );
};

export default DeleteOrderWarningModal;
