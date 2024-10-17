import { containerStyles } from "@styles/variables";
import { createPortal } from "react-dom";
import Modal from "@components/Modal";
import {
  btnBackStyles,
  imgGalery,
  itemStyles,
  sectionStyle,
  title,
} from "./CertificatesPage.styled";
import img1 from "@assets/images/imagesCertificates/updatePhoto/certificate.png";
import img2 from "@assets/images/imagesCertificates/updatePhoto/certificate (1).png";
import img3 from "@assets/images/imagesCertificates/updatePhoto/certificate (2).png";
import img4 from "@assets/images/imagesCertificates/updatePhoto/certificate (3).png";
import img5 from "@assets/images/imagesCertificates/updatePhoto/certificate (4).png";
import img6 from "@assets/images/imagesCertificates/updatePhoto/certificate (5).png";
import img7 from "@assets/images/imagesCertificates/updatePhoto/certificate (6).png";
import img8 from "@assets/images/imagesCertificates/updatePhoto/certificate (7).png";
import img9 from "@assets/images/imagesCertificates/updatePhoto/certificate (8).png";
import img10 from "@assets/images/imagesCertificates/updatePhoto/certificate (9).png";
import img11 from "@assets/images/imagesCertificates/updatePhoto/certificate (10).png";
import img12 from "@assets/images/imagesCertificates/updatePhoto/certificate (11).png";
import img13 from "@assets/images/imagesCertificates/updatePhoto/certificate (12).png";
import img14 from "@assets/images/imagesCertificates/updatePhoto/certificate (13).png";
import img15 from "@assets/images/imagesCertificates/updatePhoto/certificate (14).png";
import img16 from "@assets/images/imagesCertificates/updatePhoto/certificate (15).png";
import img17 from "@assets/images/imagesCertificates/updatePhoto/certificate (16).png";
import img18 from "@assets/images/imagesCertificates/updatePhoto/certificate (17).png";
import img19 from "@assets/images/imagesCertificates/updatePhoto/certificate (18).png";
import img20 from "@assets/images/imagesCertificates/updatePhoto/updateCertificate1.png";
import img21 from "@assets/images/imagesCertificates/updatePhoto/certificate (20).png";
import img22 from "@assets/images/imagesCertificates/updatePhoto/certificate (21).png";
import img23 from "@assets/images/imagesCertificates/updatePhoto/certificate (22).png";
import img24 from "@assets/images/imagesCertificates/updatePhoto/certificate (23).png";
import img25 from "@assets/images/imagesCertificates/updatePhoto/certificate (24).png";
import img26 from "@assets/images/imagesCertificates/updatePhoto/certificate (25).png";
import img27 from "@assets/images/imagesCertificates/updatePhoto/certificate (26).png";
import img28 from "@assets/images/imagesCertificates/updatePhoto/certificate (27).png";
import img29 from "@assets/images/imagesCertificates/updatePhoto/certificate (28).png";
import img30 from "@assets/images/imagesCertificates/updatePhoto/updateDiplom1.png";
import img31 from "@assets/images/imagesCertificates/updatePhoto/certificate (30).png";
import img32 from "@assets/images/imagesCertificates/updatePhoto/certificate (31).png";
import img33 from "@assets/images/imagesCertificates/updatePhoto/certificate (32).png";
import img34 from "@assets/images/imagesCertificates/updatePhoto/certificate (33).png";
import img35 from "@assets/images/imagesCertificates/updatePhoto/updateGuru.png";
import img36 from "@assets/images/imagesCertificates/updatePhoto/certificate (35).png";
import img37 from "@assets/images/imagesCertificates/updatePhoto/certificate (36).png";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import OneImageModal from "@components/OneImageModal/OneImageModal";
import { useLocation, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { svgArrowRight } from "@pages/ProductDetails/ProductDetails.styled";
const modalPortal = document.querySelector("#portal-root");

const imgArrayCertificates = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
];

const CertificatesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isCertificates = location.pathname === "/certificates";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [oneImg, setOneImg] = useState<string>();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const widthImg: string =
    windowWidth >= 360 && windowWidth < 768
      ? "90%"
      : windowWidth >= 768 && windowWidth < 1440
      ? "85%"
      : windowWidth >= 1440
      ? "55%"
      : "90%";

  const handleClickImg = (item: string) => {
    if (item !== "") {
      setIsModalOpen(true);
      setOneImg(item);
    }
  };

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

  const handleBackClik = () => {
    navigate("/");
  };

  const myStyles = {
    width: widthImg,
    height: "auto",
    unset: "unset",
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
              fontFamily:"Fixel",
              fontSize:"16px",
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
              fontFamily:"Fixel",
              fontSize:"16px",
              color: isCertificates
                ? "var( --text-active-link-milk)"
                : "var(--text-light-grey)",
                textDecoration:"underline"
            }}
          >
            Сертифікати
          </span>
        </div>
        <div style={{ width: "100%", display: "flex", gap: "10px" }}>
          <h1 css={title}>Сертифікати</h1>
        </div>
        <ul css={imgGalery}>
          {imgArrayCertificates &&
            imgArrayCertificates.map((item, index) => (
              <li
                key={nanoid()}
                css={itemStyles}
                onClick={() => handleClickImg(item)}
              >
                <img src={item} alt={`certificate-${index}`} />
              </li>
            ))}
        </ul>
        {isModalOpen &&
          modalPortal &&
          createPortal(
            <Modal setIsOpen={setIsModalOpen} myStyles={myStyles}>
              {oneImg && <OneImageModal item={oneImg} />}
            </Modal>,
            modalPortal
          )}
      </div>
    </section>
  );
};

export default CertificatesPage;
