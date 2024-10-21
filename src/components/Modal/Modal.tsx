import { useEffect } from "react";
import { modalContainer } from "./Modal.styled";
import { easeInOut, motion } from "framer-motion";

import { ReactComponent as CloseIcon } from "@assets/icons/close.svg";

import Overlay from "@components/Overlay";

interface IModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  myStyles?: string | undefined;
  animate?: boolean;
  center?: { recCenterX: number; recCenterY: number };
}

const Modal: React.FC<IModalProps> = ({
  setIsOpen,
  children,
  myStyles,
  animate,
  center,
}) => {
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

  const variants = animate
    ? {
        hidden: {
          opacity: 0.3,
          x: center && center.recCenterX - window.innerWidth / 2,
          y: center && center.recCenterY - window.innerHeight / 2,
          scale: 0.1,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: easeInOut },
        },
      }
    : undefined;

  return (
    <Overlay setIsOpen={handleModalClose} type="modal">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        css={modalContainer(myStyles)}
      >
        <button type="button" onClick={handleModalClose} className="closeBtn">
          <CloseIcon />
        </button>
        {children}
      </motion.div>
    </Overlay>
  );
};

export default Modal;
