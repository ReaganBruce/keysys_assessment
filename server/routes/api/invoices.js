import express from "express";
import invoiceController from "../../controller/invoicesController.js";

const router = express.Router();

//localhost:5000/invoices
router.get("/invoices", invoiceController.getAllInvoices);

//localhost:5000/api/invoices/judicial
router.get('/invoices/judicial', invoiceController.getInvoiceCodeJudicial)

//localhost:5000/api/invoices/nonjudicial
router.get('/invoices/nonjudicial', invoiceController.getInvoiceCodeNonJudicial)

//localhost:5000/invoices/id
router.get("/invoices/:id", invoiceController.getInvoiceId);

export default router;
