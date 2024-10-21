import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { nanoid } from "nanoid";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { svgArrowRight } from "@pages/ProductDetails/ProductDetails.styled";

import { containerStyles } from "@styles/variables";
import {
  btnBackStyles,
  imgGalery,
  itemStyles,
  sectionStyle,
  title,
} from "./CertificatesPage.styled";

import Modal from "@components/Modal";
import OneImageModal from "@components/OneImageModal/OneImageModal";

import { certificatesImgArr } from "@constants/certificatesImgArr";

const modalPortal = document.querySelector("#portal-root");

const CertificatesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isCertificates = location.pathname === "/certificates";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [oneImg, setOneImg] = useState<string>();
  const [recCenterX, setRecCenterX] = useState<number>(0);
  const [recCenterY, setRecCenterY] = useState<number>(0);

  const handleClickImg = (e: React.MouseEvent, item: string) => {
    const element = e.target as HTMLLIElement;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setRecCenterX(centerX);
    setRecCenterY(centerY);

    if (item !== "") {
      setIsModalOpen(true);
      setOneImg(item);
    }
  };

  const handleBackClik = () => {
    navigate("/");
  };

  return (
    <section css={sectionStyle}>
      <div css={containerStyles}>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <button onClick={handleBackClik} css={btnBackStyles}>
            <BiArrowBack
              style={{ fontSize: "16px", color: "var(--text-light-grey)" }}
            />
          </button>
          <span
            style={{
              width: "auto",
              display: "flex",
              gap: "10px",
              fontFamily: "Fixel",
              fontSize: "16px",
              color: "var(--text-light-grey)",
            }}
          >
            Головна сторінка
          </span>
          <span
            style={{
              width: "auto",
              display: "flex",
              gap: "10px",
              color: "var(--text-light-grey)",
            }}
          >
            <MdOutlineKeyboardArrowRight css={svgArrowRight} />
          </span>
          <span
            style={{
              width: "auto",
              display: "flex",
              gap: "10px",
              fontFamily: "Fixel",
              fontSize: "16px",
              color: isCertificates
                ? "var( --text-active-link-milk)"
                : "var(--text-light-grey)",
              textDecoration: "underline",
            }}
          >
            Сертифікати
          </span>
        </div>
        <div style={{ width: "100%", display: "flex", gap: "10px" }}>
          <h1 css={title}>Сертифікати</h1>
        </div>
        <ul css={imgGalery}>
          {certificatesImgArr.map((item: string, index: number) => (
            <li
              key={nanoid()}
              css={itemStyles}
              onClick={(e) => handleClickImg(e, item)}
            >
              <img src={item} alt={`certificate-${index}`} />
            </li>
          ))}
        </ul>
        {isModalOpen &&
          modalPortal &&
          createPortal(
            <Modal
              setIsOpen={setIsModalOpen}
              myStyles={oneImg}
              animate
              center={{ recCenterX, recCenterY }}
            >
              {oneImg && <OneImageModal item={oneImg} />}
            </Modal>,
            modalPortal
          )}
      </div>
    </section>
  );
};

export default CertificatesPage;
