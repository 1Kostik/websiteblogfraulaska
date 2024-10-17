import React from "react";

import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import {
  arrow,
  ButtonPage,
  Container,
  doubleArrow,
  PaginationContainer,
} from "./Pagination.styled";

import { ReactComponent as ArrowNext } from "@assets/icons/arrow_next.svg";
import { ReactComponent as ArrowPrev } from "@assets/icons/arrow_prev.svg";

interface IPagination {
  totalPage: number;
  countItemPages: number;
  paginate: (pageNumber: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  firstPageBtn: () => void;
  lastPageBtn: () => void;
  currentPage: number;
  lastPage: number;
}

const Pagination: React.FC<IPagination> = ({
  totalPage,
  countItemPages,
  paginate,
  prevPage,
  nextPage,
  firstPageBtn,
  lastPageBtn,
  currentPage,
  lastPage,
}) => {
  const totalPages = Math.ceil(totalPage / countItemPages);

  const numberOfPagesToDisplay = () => {
    const range = 5;
    let start: number;
    let end: number;

    if (totalPages <= range) {
      start = 0;
      end = totalPages;
    } else {
      const halfRange = Math.floor(range / 2);

      if (currentPage <= halfRange) {
        start = 0;
        end = range;
      } else if (currentPage + halfRange >= totalPages) {
        start = totalPages - range;
        end = totalPages;
      } else {
        start = currentPage - halfRange - 1;
        end = currentPage + halfRange;
      }
    }

    return Array.from({ length: end - start }, (_, i) => i + start + 1);
  };

  return (
    <Container>
      <PaginationContainer>
        <button
          onClick={() => firstPageBtn()}
          style={{
            visibility:
              totalPages < 3 || currentPage === 1 ? "hidden" : "visible",
          }}
        >
          <MdKeyboardDoubleArrowLeft css={doubleArrow} />
        </button>
        <button
          onClick={() => prevPage()}
          style={{ visibility: currentPage === 1 ? "hidden" : "visible" }}
        >
          <ArrowPrev css={arrow} />
        </button>
        {numberOfPagesToDisplay().map((page) => (
          <ButtonPage
            key={page}
            onClick={() => paginate(page)}
            currentPage={currentPage === page}
            style={{ visibility: totalPages > 1 ? "visible" : "hidden" }}
          >
            {page}
          </ButtonPage>
        ))}
        <button
          onClick={() => nextPage()}
          style={{
            visibility: currentPage === lastPage ? "hidden" : "visible",
          }}
        >
          <ArrowNext css={arrow} />
        </button>
        <button
          onClick={() => lastPageBtn()}
          style={{
            visibility:
              totalPages < 3 || currentPage === lastPage ? "hidden" : "visible",
          }}
        >
          <MdKeyboardDoubleArrowRight css={doubleArrow} />
        </button>
      </PaginationContainer>
    </Container>
  );
};

export default Pagination;
