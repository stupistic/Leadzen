import React from "react";
import "./Pagination.css";

export const Pagination = ({ postperpage, totalpost, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalpost / postperpage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumber.map((number) => (
          //   <li key={number} className="page-item">
          <a
            key={number}
            onClick={() => paginate(number).preventDefault()}
            href="!#"
          >
            {number}
          </a>
          //   </li>
        ))}
      </ul>
    </div>
  );
};
