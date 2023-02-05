const express = require('express')
const mongoose = require('mongoose')
const router = require('./routers/router')
mongoose.set('strictQuery', false)

const app = express()
app.use(express.json())


mongoose.connect("mongodb+srv://sanhil143:raisahab12345@sanhildb.kk3knyj.mongodb.net/Order-Management")
.then(() => console.log("mongo DB is connected"))
.catch((err) => console.error(err))


app.use('/', router)

app.listen(5000,() => {
      console.log("Express app running on port " + 5000);
})

