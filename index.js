const express = require('express')
const app = express()
const port = 2525

const itemRouts = require('./routes/item/item')
app.use(express.json())


app.use('/items',itemRouts)


app.listen(port, ()=>{
    console.log(`running on port ${port}` )
})