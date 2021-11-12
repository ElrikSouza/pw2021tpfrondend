import React from "react";

const createPageButtons = (currentPage, numOfPages, onClick) => {
  const buttons = [];
  for (let page = 1; page <= numOfPages; page++) {
    buttons.push(
      <button
        key={page}
        onClick={onClick(page)}
        disabled={page === currentPage}
      >
        {page}
      </button>
    );
  }
  return buttons;
};

export const Pagination = ({ currentPage, numOfPages, onClickPageButton }) => {
  const onClick = (page) => () => onClickPageButton(page);
  const pageButtons = createPageButtons(currentPage, numOfPages, onClick);

  return (
    <div>
      <button disabled={currentPage === 1} onClick={onClick(currentPage - 1)}>
        Prev
      </button>
      {pageButtons}
      <button
        disabled={currentPage === numOfPages}
        onClick={onClick(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};
