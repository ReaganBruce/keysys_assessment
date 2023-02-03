import React, { useEffect, useState } from "react";

//Imported Components
import Invoice from "./Invoice";
import Pagination from "./Pagination";

const Invoices = () => {
  const [invoiceData, setInvoiceData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); //begins at page 1
  const [invoicesPerPage] = useState(33); //amount per page

  useEffect(() => {
    try {
      fetch("/api/invoices")
        .then((res) => res.json())
        .then((data) => setInvoiceData(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  //Current Invoice
  const indexOfLastInvoice = currentPage * invoicesPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage;
  const currentInvoices = invoiceData.slice(
    indexOfFirstInvoice,
    indexOfLastInvoice
  );

  //Referring to "paginate" function in Pagination component
  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <>
      <main className="container px-1">
        <section className="row-lg-12 d-flex flex-row flex-wrap px-1 p-4">
          <Pagination
            invoicesPerPage={invoicesPerPage}
            totalInvoices={invoiceData.length}
            paginate={paginate}
          />
          <Invoice invoiceData={currentInvoices} />
        </section>
      </main>
    </>
  );
};

export default Invoices;
