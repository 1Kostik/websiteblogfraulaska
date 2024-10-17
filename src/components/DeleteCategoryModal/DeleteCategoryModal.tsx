import React from "react";
import { buttonStyle, wrapper } from "./DeleteCategoryModal.styled";

interface IDeleteCategoryProps {
  name: string;
  onDelete: (name: string) => void;
}

const DeleteCategoryModal: React.FC<IDeleteCategoryProps> = ({
  onDelete,
  name,
}) => {
  return (
    <div css={wrapper}>
      <h2>Ви збираєтесь видалити категорію!</h2>
      <p>
        При видалені категорії, усі пов'язані з нею товари будут також видаленні
        !!!
      </p>
      <p>Підтвердіть видалення категорії:</p>
      <span>{name}</span>

      <button type="button" onClick={() => onDelete(name)} css={buttonStyle}>
        Підтвердити
      </button>
    </div>
  );
};

export default DeleteCategoryModal;
