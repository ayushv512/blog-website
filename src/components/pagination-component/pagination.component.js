import React from "react";

import { usePagination, DOTS } from "../../utils/use-pagination";
import { PaginationContainer } from "./style";
import PropTypes from "prop-types";

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationContainer>
      <li
        className={
          currentPage === 1 ? "pagination-item disabled" : "pagination-item"
        }
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li className="pagination-item dots" key={pageNumber + index}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={
              pageNumber === currentPage
                ? "pagination-item selected"
                : "pagination-item"
            }
            onClick={() => onPageChange(pageNumber)}
            key={pageNumber + index}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={
          currentPage === lastPage
            ? "pagination-item disabled"
            : "pagination-item"
        }
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number
};

export default Pagination;
