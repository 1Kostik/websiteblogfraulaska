import { useEffect } from "react";
import { modalContainer } from "./Modal.styled";

import { ReactComponent as CloseIcon } from "@assets/icons/close.svg";

import Overlay from "@components/Overlay";

import { IMyStyles } from "Interfaces/IMyStyles";

interface IModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  myStyles?: IMyStyles | undefined;
}

const Modal: React.FC<IModalProps> = ({ setIsOpen, children, myStyles }) => {
  const handleModalClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpen]);

  return (
    <Overlay setIsOpen={handleModalClose} type="modal">
      <div css={modalContainer(myStyles)}>
        <button type="button" onClick={handleModalClose} className="closeBtn">
          <CloseIcon />
        </button>
        {children}
      </div>
    </Overlay>
  );
};

export default Modal;
