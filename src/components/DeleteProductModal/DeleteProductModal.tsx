import React from "react";
import { buttonStyle, wrapper } from "./DeleteProductModal.styled";

interface IDeleteProductProps {
  productId: number;
  title: string | undefined;
  onDelete: (productId: number) => void;
}

const DeleteProductModal: React.FC<IDeleteProductProps> = ({
  onDelete,
  productId,
  title,
}) => {
  return (
    <div css={wrapper}>
      <h2>Ви збираєтесь видалити продукт!</h2>
      <p>Підтвердіть видалення продукта:</p>
      {title && <span>{title}</span>}

      <button
        type="button"
        onClick={() => onDelete(productId)}
        css={buttonStyle}
      >
        Підтвердити
      </button>
    </div>
  );
};

export default DeleteProductModal;
