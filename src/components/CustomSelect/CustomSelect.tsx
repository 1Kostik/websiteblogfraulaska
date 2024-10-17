import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FormikProps } from "formik";
import { nanoid } from "nanoid";

import { RiDeleteBin2Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { selectCategories } from "@redux/categories/selectors";
import { editCategory, removeCategory } from "@redux/categories/operations";

import { ReactComponent as ArrowDownIcon } from "@assets/icons/arrow-down-select.svg";

import {
  dropdownStyle,
  selectContainer,
  selectorStyle,
} from "./CustomSelect.styled";

import { IAdvert } from "Interfaces/IAdvert";
import { ICategory } from "Interfaces/ICategory";

import Modal from "@components/Modal";
import DeleteCategoryModal from "@components/DeleteCategoryModal";
import EditCategoryModal from "@components/EditCategoryModal";
import { errorBorder } from "@components/CartForm/CartForm.styled";

const modalPortal = document.querySelector("#portal-root");

interface ICustomSelectProps {
  formik: FormikProps<IAdvert>;
  selectedCategoryId?: number | string;
}

interface IEditAction {
  type: string;
  name: string;
}

const CustomSelect: React.FC<ICustomSelectProps> = ({
  formik,
  selectedCategoryId,
}) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    number | string | undefined
  >(selectedCategoryId);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editAction, setEditAction] = useState<IEditAction | undefined>(
    undefined
  );

  const { setFieldError, setFieldValue, errors, touched } = formik;

  const dispatch = useAppDispatch();
  const categories: ICategory[] = useAppSelector(selectCategories);

  const handleShowDropDown = () => {
    setIsShowDropdown((prev) => !prev);
    setFieldError("category_id", undefined);
  };

  const categoryId = (name: string) => {
    return categories.find((item) => item.title === name)?.id || 0;
  };

  const handleOptionClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const categoryName = (e.target as HTMLDivElement).innerText;
    setSelectedCategory(categoryId(categoryName));
    setTimeout(() => {
      setIsShowDropdown(false);
    }, 300);
  };

  const handleShowCategory = () => {
    if (selectedCategory) {
      return categories.find((item) => item.id === selectedCategory)?.title;
    }
    return "Оберіть категорію";
  };

  const handleEditCategory = (category: string, type: string) => {
    if (type === "delete") {
      setEditAction({ type: "delete", name: category });
    } else {
      setEditAction({ type: "change", name: category });
    }
    setIsModalOpen(true);
  };

  const handleDeleteCategory = (categoryName: string) => {
    dispatch(removeCategory(categoryId(categoryName))).then(() =>
      setIsModalOpen(false)
    );
  };

  const handleCategoryNameEdit = (categoryName: string, newName: string) => {
    dispatch(
      editCategory({ id: categoryId(categoryName), name: newName })
    ).then(() => setIsModalOpen(false));
  };

  useEffect(() => {
    if (selectedCategory) {
      setFieldValue("category_id", selectedCategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest("[data-options]") &&
        !target.closest("[data-dropdown-trigger]")
      ) {
        setTimeout(() => {
          setIsShowDropdown(false);
        }, 300);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div css={selectContainer}>
      <div
        onClick={handleShowDropDown}
        data-dropdown-trigger
        css={[
          selectorStyle(isShowDropdown),
          errorBorder(!!(errors.category_id && touched.category_id)),
        ]}
      >
        <p>{handleShowCategory()}</p>
        <button type="button">
          <ArrowDownIcon className="arrow" />
        </button>
      </div>
      {isShowDropdown && (
        <div data-options css={dropdownStyle} onClick={handleOptionClick}>
          {categories.map((item) => (
            <div key={nanoid()}>
              {selectedCategory === item.id && (
                <FaCheck className="checkIcon" />
              )}
              <p>{item.title}</p>
              <button
                type="button"
                className="editBtn"
                onClick={() => handleEditCategory(item.title, "change")}
              >
                <FaRegEdit />
              </button>
              <button
                type="button"
                onClick={() => handleEditCategory(item.title, "delete")}
                className="deleteBtn"
              >
                <RiDeleteBin2Line />
              </button>
            </div>
          ))}
        </div>
      )}
      {isModalOpen &&
        modalPortal &&
        createPortal(
          <Modal setIsOpen={setIsModalOpen}>
            {editAction?.type === "change" && (
              <EditCategoryModal
                name={editAction.name}
                onTitleEdit={handleCategoryNameEdit}
              />
            )}
            {editAction?.type === "delete" && (
              <DeleteCategoryModal
                onDelete={handleDeleteCategory}
                name={editAction.name}
              />
            )}
          </Modal>,
          modalPortal
        )}
    </div>
  );
};

export default CustomSelect;
