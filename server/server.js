import express from 'express'
import routes from './routes/index.js'


const app = express()

app.use(express.json())

//route middleware
app.use(routes)


const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`)
})