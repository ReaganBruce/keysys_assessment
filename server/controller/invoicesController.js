import invoices from '../data/invoiceData.json' assert { type: "json" }

const getAllInvoices = (req, res) => {
    try {
        res.status(200).send(invoices)
    } catch (err) {
        res.status(404).json({
            Status: 404,
            Message: "Invoices not found"
        })
        console.log(err)
    }
}

export default {
    getAllInvoices
}