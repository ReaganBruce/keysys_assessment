import React from "react";

const Invoice = ({ invoiceData }) => {
  return (
    <>
      {invoiceData.map((invoice) => (
        <div id="invoice-column" className="col-4 mb-4 p-3">
          <div key={invoice.InvoiceId}>
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
    </>
  );
};

export default Invoice;
