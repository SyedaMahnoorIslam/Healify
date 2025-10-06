import React from "react";
import { PaginationContainer, PageButton } from "./style";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null; 

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationContainer>
      {/* Previous Button */}
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </PageButton>

      {/* Page Numbers */}
      {pages.map((page) => (
        <PageButton
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}

      {/* Next Button */}
      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;