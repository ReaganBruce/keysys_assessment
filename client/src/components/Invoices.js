import React, { useEffect, useState } from "react";
const Invoices = () => {
  const [invoiceData, setInvoiceData] = useState([]);

  useEffect(() => {
    fetch("/api/invoices")
      .then((res) => res.json())
      .then((data) => setInvoiceData(data));
  }, []);

  return (
    <>
      <main className="container p-5">
        <section className="row-lg-12 d-flex flex-row flex-wrap px-5 p-4">
          {invoiceData.map((invoice) => (
            <div id="invoice-column" className="col-4 mb-4 p-3">
              <div key={`invoice-key-${invoice["ns3:InvoiceTypeCode"]}`}>
                <div className="card shadow h-100">
                  <div className="card-body">
                    <h1>Invoice</h1>
                    <h6 className="card-number">
                      Invoice Code: {invoice["ns3:InvoiceTypeCode"]}
                    </h6>
                    <h6 className="card-title">
                      Inventory Description:{" "}
                      {invoice["ns3:InvoiceTypeDescription"]}
                    </h6>
                    <br></br>
                    <h6 className="card-number">
                      Category ID: {invoice["ns3:CategoryID"]}
                    </h6>
                    <h6 className="card-title">
                      Category Description: {invoice["ns3:CategoryDescription"]}
                    </h6>
                    <br></br>
                    <h6 className="card-number">
                      SubCategory ID: {invoice["ns3:SubCategoryID"]}
                    </h6>
                    <h6 className="card-number">
                      SubCategory Description: {invoice["ns3:SubCategoryDescription"]}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Invoices;



/*
InvoiceTypeCode
InvoiceTypeDescription
CategoryId
CategoryDescription
SubCategoryId
SubCategoryDescription



 <div
          key={`invoice-card-${invoice["ns3:InvoiceTypeCode"]}`}
          className="col-md-12"
        >



  // <p>{invoice['ns3:InvoiceTypeCode']}
        //   {invoice['ns3:InvoiceTypeDescription']}
        //   {invoice['ns3:CategoryID']}
        //   {invoice['ns3:CategoryDescription']}
        //   {invoice['ns3:SubCategoryID']}
        //   {invoice['ns3:SubCategoryDescription']}
        // </p>




*/
