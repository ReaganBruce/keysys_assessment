import React, { useEffect, useState  } from 'react'

const Invoices = () => {
  const [invoicesData, setInvoicesData] = useState([])

  useEffect(() => {
    fetch('/api/invoices')
    .then((res) => res.json())
    .then((invoiceData => setInvoicesData(invoiceData)))
  }, [])

  return (
    <>
      {invoicesData.map((invoice) => (
        <p>{invoice['ns3:InvoiceTypeCode']}
          {invoice['ns3:InvoiceTypeDescription']}
          {invoice['ns3:CategoryID']}
          {invoice['ns3:CategoryDescription']}
          {invoice['ns3:SubCategoryID']}
          {invoice['ns3:SubCategoryDescription']}
        </p>
      ))}
    </>
  )

}


/*
InvoiceTypeCode
InvoiceTypeDescription
CategoryId
CategoryDescription
SubCategoryId
SubCategoryDescription
*/

export default Invoices