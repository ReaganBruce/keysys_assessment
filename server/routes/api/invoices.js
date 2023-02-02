import express from 'express'
import invoiceController from '../../controller/invoicesController.js'

const router = express.Router()

//localhost:3000/invoices
router.get('/invoices', invoiceController.getAllInvoices)


export default router