import { useEffect, useRef, useState, SetStateAction } from "react";

import { ReactComponent as Checked } from "@assets/icons/checked.svg";
import { ReactComponent as ArrowUp } from "@assets/icons/arrow-up-select.svg";
import { ReactComponent as ArrowDpwn } from "@assets/icons/arrow-down-select.svg";

import {
  Container,
  P,
  SelectContainer,
  SelectOption,
  SelectOptionContainer,
  SelectTitleContainer,
  svgCheckedStyles,
  SelectOne,
  SvgContainer,
  svgArrowUp,
  svgArrowDpwn,
} from "./SortingItems.styled";

import { updatePaymentStatus } from "@services/servicesApi";
import { updateStatus } from "@utils/updateStatus";

interface ISortingItProps<T> {
  idOrders?: number;
  width?: string;
  widthTagP?: string;
  widthContainer?: string;
  height?: string;
  border?: string;
  options: T[] | null;
  padding?: string;
  color?: string;
  top?: string;
  gap?: string;
  fontSize?: string;
  borderRadius?: string;
  justifyContent?: string;
  backGround?: string;
  isOpenSearch?: boolean;
  isOpenFilter?: boolean;
  disableWidth?: string;
  setSelectedOption?: React.Dispatch<SetStateAction<T | null>>;
  selectedOption?: T | null;
  setIsOpenModal?: React.Dispatch<SetStateAction<boolean>>;
  disable?: boolean;
}
const SortingItems = <T extends number | string>({
  width,
  idOrders,
  widthTagP,
  widthContainer,
  height,
  border,
  options,
  padding,
  top,
  gap,
  color,
  fontSize,
  borderRadius,
  justifyContent,
  backGround,
  isOpenSearch,
  isOpenFilter,
  disableWidth,
  setSelectedOption,
  selectedOption,
  setIsOpenModal,
  disable,
}: ISortingItProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      if (setSelectedOption && options && options.length > 0) {
        setSelectedOption(options[0]);
        setChecked(true);
      }
      isInitialMount.current = false;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSelectedOption, options]);

  const handleClick = () => {
    if (disable) {
      return;
    }
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: T) => {
    if (option === "Сплачено") {
      updatePaymentStatus(Number(idOrders));
    }
    if (setSelectedOption) {
      setSelectedOption(option);
      setChecked(true);
      setIsOpen(false);
      if (setIsOpenModal && option === "Відхилено") {
        setIsOpenModal(true);
      } else if (setIsOpenModal) {
        setIsOpenModal(false);
      }
    }
    if (idOrders && option === "Відправлено") {
      updateStatus(idOrders, option);
    }
  };

  const isChange = isOpenFilter && isOpenSearch;
  return (
    <Container>
      <SelectContainer height={height} widthContainer={widthContainer}>
        <SelectTitleContainer
          onClick={handleClick}
          isOpen={isOpen}
          padding={padding}
          border={border}
          borderRadius={borderRadius}
          justifyContent={justifyContent}
          backGround={backGround}
        >
          <P
            widthTagP={widthTagP}
            isOpen={isOpen}
            isChange={isChange}
            isOpenSearch={isOpenSearch}
            disableWidth={disableWidth}
            color={color}
            fontSize={fontSize}
          >
            {selectedOption ? selectedOption : ""}
          </P>
          {isOpen && !disable ? (
            <ArrowUp css={svgArrowUp(color)} />
          ) : (
            <ArrowDpwn css={svgArrowDpwn(color)} />
          )}
        </SelectTitleContainer>
        {isOpen && (
          <SelectOptionContainer
            width={width}
            color={color}
            backGround={backGround}
            top={top}
          >
            {options &&
              options.map((option, i) => (
                <SelectOne key={option + `${i}`} gap={gap}>
                  <SvgContainer>
                    {checked && selectedOption === option && (
                      <Checked css={svgCheckedStyles(color)} />
                    )}
                  </SvgContainer>
                  <SelectOption
                    key={i}
                    onClick={() => handleSelect(option)}
                    color={color}
                  >
                    {option}
                  </SelectOption>
                </SelectOne>
              ))}
          </SelectOptionContainer>
        )}
      </SelectContainer>
    </Container>
  );
};

export default SortingItems;
