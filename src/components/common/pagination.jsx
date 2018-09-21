import React from "react";
import propTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onCurrentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  return (
    <div className="btn-group">
      <button
        className="btn btn-primary"
        disabled={currentPage === 1}
        onClick={() => onCurrentPage(currentPage - 1)}
      >
        <i className="fa fa-angle-double-left" /> Previous
      </button>
      <button
        className="btn btn-primary"
        disabled={currentPage === pagesCount}
        onClick={() => onCurrentPage(currentPage + 1)}
      >
        Next <i className="fa fa-angle-double-right" />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onCurrentPage: propTypes.func.isRequired
};

export default Pagination;
