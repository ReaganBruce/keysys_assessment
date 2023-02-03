import invoices from "../data/invoiceData.json" assert { type: "json" };

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
  const invoice = Object.assign({}, invoices[invoiceId - 1]); //-1 to get the Id's synced to the correct index
  try {
    res.send(invoice);
  } catch (err) {
    res.status(404).json({
      Status: 404,
      Message: "Invoice not found",
    });
  }
};

const getInvoiceCodeJudicial = (req, res) => {
  const judicialArray = [];
  invoices.map((invoice) => {
    if (invoice["ns3:InvoiceTypeCode"] == 807) {
      judicialArray.push({ ...invoice }); //spread object body with 808 to new array
    }
  });
  try {
    res.send(judicialArray);
  } catch (err) {
    res.status(404).json({
      Status: 404,
      Message: "Invoices not found",
    });
    console.log(err);
  }
};

const getInvoiceCodeNonJudicial = (req, res) => {
  const nonJudicialArray = [];
  invoices.map((invoice) => {
    if (invoice["ns3:InvoiceTypeCode"] == 808) {
      nonJudicialArray.push({ ...invoice }); //spread body with 807 to new array
    }
  });
  try {
    res.send(nonJudicialArray);
  } catch (err) {
    res.status(404).json({
      Status: 404,
      Message: "Invoices not found",
    });
    console.log(err);
  }
};

export default {
  getAllInvoices,
  getInvoiceId,
  getInvoiceCodeJudicial,
  getInvoiceCodeNonJudicial,
};
