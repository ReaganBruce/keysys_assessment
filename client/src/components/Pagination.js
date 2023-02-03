import React from "react";

const Pagination = ({ invoicesPerPage, totalInvoices, paginate }) => {
  const pageNumbers = [];

  //Loop through invoices and push
  for (let i = 1; i <= Math.ceil(totalInvoices / invoicesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((num) => (
            <li id="number-field" key={num} className="page-item p-2">
              <a onClick={() => paginate(num)} className="page-link">
                {num}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;