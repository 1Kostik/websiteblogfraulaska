import { useEffect } from "react";

import { overlayStyle } from "./Overlay.styled";

import { useAppSelector } from "@redux/hooks";
import { selectIsAdsLoading } from "@redux/ads/selectors";
import { selectAuthIsLoading } from "@redux/auth/selectors";

interface IOverlayProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  type?: string | undefined;
}

const Overlay: React.FC<IOverlayProps> = ({ setIsOpen, children, type }) => {
  const isLoadingProduct = useAppSelector(selectIsAdsLoading);
  const isLoadingAuth = useAppSelector(selectAuthIsLoading);

  const handleOverlayClick = (e: React.MouseEvent) => {
    const { id } = e.target as HTMLDivElement;
    if (id === "overlay") {
      e.stopPropagation();
      setIsOpen && setIsOpen(false);
    }
    e.stopPropagation();
  };

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  {
    if (
      type === "loader" ||
      type === "modal" ||
      isLoadingProduct ||
      isLoadingAuth
    ) {
      return (
        <div css={overlayStyle} onClick={handleOverlayClick} id="overlay">
          {children}
        </div>
      );
    }
    return null;
  }
};

export default Overlay;
