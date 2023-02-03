import invoices from "../data/invoiceData.json" assert { type: "json" };

const getInvoice = (id) => {
  return Object.assign({}, invoices[id]);
};


const getAllInvoices = (req, res) => {
  try {
    res.status(200).send(invoices);
  } catch (err) {
    res.status(404).json({
      Status: 404,
      Message: "Invoices not found",
    });
    console.log(err);
  }
};

//was unable to fetch invoice by id in the front end; I thought I'd leave this in just show the logic.
//to view the API, go to localhost:3000/api/invoices/:id
const getInvoiceId = (req, res) => {
  const invoiceId = req.params.id; //object ID
  const invoice = getInvoice(invoiceId - 1); //-1 to get the Id's synced to the correct index
  try {
    res.send(invoice);
  } catch (err) {
    res.status(404).json({
      Status: 404,
      Message: "Invoice not found",
    });
  }
};

export default {
  getAllInvoices,
  getInvoiceId,
};
