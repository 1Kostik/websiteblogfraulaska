import React, { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

import {
  imgThumb,
  infoContainer,
  titleWrapper,
  container,
  contentWrapper,
  titleButtons,
  buttonsWrapper,
  activeStyle,
  showMoreBtn,
  textWrapper,
} from "./TabBox.styled";

import { Tab } from "constants/tabArr";
import { Info } from "constants/tabArr";

interface TabBoxProps {
  title: string;
  content: Tab[];
  photo?: string;
  children?: string;
  imgThumbHeight: number;
}

const TabBox: React.FC<TabBoxProps> = ({
  title,
  content,
  photo,
  children,
  imgThumbHeight,
}) => {
  const [wrapperWidth, setWrapperWidth] = useState<number | undefined>(
    undefined
  );
  const [activeBtn, setActiveBtn] = useState<number>(0);
  const [isShowMore, setIsShowMore] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const textWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleChangeChapter = (i: number) => {
    setActiveBtn(i);
    setIsShowMore(false);
  };

  const handleShowMore = () => {
    setIsShowMore((prev) => !prev);
  };

  useEffect(() => {
    const sizeObserver = new ResizeObserver((entries) => {
      setWrapperWidth((entries[0].target as HTMLElement).offsetWidth);
    });
    wrapperRef.current && sizeObserver.observe(wrapperRef.current);

    return () => {
      sizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const checkOverflow = () => {
      if (textWrapperRef.current) {
        if (!isShowMore) {
          setIsOverflow(
            textWrapperRef.current.scrollHeight >
              textWrapperRef.current.clientHeight
          );
        }
      }
    };
    checkOverflow();

    const observer = new MutationObserver(checkOverflow);
    if (textWrapperRef.current) {
      observer.observe(textWrapperRef.current, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [activeBtn, isShowMore]);

  return (
    <div css={container(content.length)} ref={wrapperRef}>
      <div css={titleWrapper(wrapperWidth)}>
        <h3>{title}</h3>
        {content.length > 1 && (
          <div css={buttonsWrapper}>
            {content.map((item, i) => {
              return (
                <button
                  type="button"
                  key={nanoid()}
                  css={[titleButtons, activeBtn === i && activeStyle]}
                  onClick={() => handleChangeChapter(i)}
                >
                  {item.chapter}
                </button>
              );
            })}
          </div>
        )}
      </div>
      <div css={contentWrapper}>
        <div css={imgThumb(wrapperWidth, !!children, imgThumbHeight)}>
          {children ? children : photo && <img src={photo} alt="photo" />}
        </div>

        <div css={infoContainer(wrapperWidth, imgThumbHeight, isShowMore)}>
          <div css={textWrapper(isShowMore)} ref={textWrapperRef}>
            {content[activeBtn].info.map((info: Info) => {
              return (
                <div key={nanoid()}>
                  <h4>{info.title}</h4>
                  <p>{info.description}</p>
                </div>
              );
            })}
          </div>
          {isOverflow && (
            <button type="button" css={showMoreBtn} onClick={handleShowMore}>
              {isShowMore ? "Показати меньше" : "Показати більше"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabBox;
