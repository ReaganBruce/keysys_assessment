import React, { useEffect, useState } from "react";
const Invoices = () => {
  const [invoiceData, setInvoiceData] = useState([]);

  useEffect(() => {
    try {
      fetch("/api/invoices")
      .then((res) => res.json())
      .then((data) => setInvoiceData(data));
    } catch (err) {
      console.log(err)
    }
  }, []);

  return (
    <>
      <main className="container px-1">
        <section className="row-lg-12 d-flex flex-row flex-wrap px-1 p-4">
          {invoiceData.map((invoice) => (
            <div id="invoice-column" className="col-4 mb-4 p-3">
              <div key={`invoice-key-${invoice["ns3:InvoiceTypeCode"]}`}>
                <div className="card shadow h-100">
                  <div className="card-body">
                    <div className="card-number">
                      <h2>Invoice Type: {invoice["ns3:InvoiceTypeCode"]}</h2>
                      <h5>{invoice["ns3:InvoiceTypeDescription"]}</h5>
                    </div>
                    <br></br>
                    <div>
                    <h3 className="card-number">
                      Line Item Code: {invoice["ns3:CategoryID"]}
                    </h3>
                    <h5 className="card-title">
                    {invoice["ns3:CategoryDescription"]}
                    </h5>
                    </div>
                    <br></br>
                    <div>
                    <h3 className="card-number">
                      SubCategory Code: {invoice["ns3:SubCategoryID"]}
                    </h3>
                    <h6 className="card-number">
                      {invoice["ns3:SubCategoryDescription"]}
                    </h6>
                    </div>
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
