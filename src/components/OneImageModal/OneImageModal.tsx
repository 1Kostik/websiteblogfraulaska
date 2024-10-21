import { useEffect, useState } from "react";

interface IOneImageModalProps {
  item: string;
}

const OneImageModal: React.FC<IOneImageModalProps> = ({ item }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isVerticalImg = item.includes("-V");

  const widthImg: string =
    windowWidth >= 360 && windowWidth < 768
      ? "90vw"
      : windowWidth >= 768 && windowWidth < 1440
      ? isVerticalImg
        ? "auto"
        : "85vw"
      : isVerticalImg
      ? "auto"
      : "55vw";

  const heightImg: string =
    windowWidth >= 360 && windowWidth < 768
      ? "auto"
      : windowWidth >= 768 && windowWidth < 1440
      ? isVerticalImg
        ? "90vh"
        : "auto"
      : isVerticalImg
      ? "90vh"
      : "auto";

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        height: heightImg,
        width: widthImg,
      }}
    >
      <img src={item} alt="certificate" />
    </div>
  );
};

export default OneImageModal;
