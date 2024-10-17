import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

import { useAppDispatch } from "@redux/hooks";

import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";

import { interfaceStyle } from "./ProductInterface.styled";

import { deleteProduct, getProduct } from "@redux/ads/operations";

import Modal from "@components/Modal";
import DeleteProductModal from "@components/DeleteProductModal";

const modalPortal = document.querySelector("#portal-root");

interface IProductInterfaceProps {
  productId: number;
  title?: string;
  setIsAdvertDeleted?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductInterface: React.FC<IProductInterfaceProps> = ({
  productId,
  title,
  setIsAdvertDeleted,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = true;

  const handleProductEdit = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(getProduct(productId)).then(() => {
      navigate(`/admin/edit-advert/:${productId}`);
    });
  };

  const handleProductDelete = (productId: number) => {
    dispatch(deleteProduct(productId)).then(() => {
      if (setIsAdvertDeleted) {
        setIsAdvertDeleted((prev) => !prev);
      } else {
        navigate("/store");
      }
    });
  };

  const handleOpenModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      {isAuth ? (
        <>
          <div css={interfaceStyle}>
            <button type="button" onClick={handleProductEdit}>
              <CiEdit />
            </button>
            <button type="button" onClick={handleOpenModal}>
              <MdOutlineDeleteForever />
            </button>
          </div>
          {isModalOpen &&
            modalPortal &&
            createPortal(
              <Modal setIsOpen={setIsModalOpen}>
                <DeleteProductModal
                  onDelete={handleProductDelete}
                  productId={productId}
                  title={title}
                />
              </Modal>,
              modalPortal
            )}
        </>
      ) : null}
    </>
  );
};

export default ProductInterface;
