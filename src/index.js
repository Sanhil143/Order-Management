const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const router = require('./routers/router')
mongoose.set('strictQuery', false)

const app = express()
app.use(express.json())
dotenv.config();

mongoose.connect(process.env.MY_DB_URL)
.then(() => console.log("mongo DB is connected"))
.catch((err) => console.error(err))


app.use('/', router)

app.listen(5000,() => {
      console.log("Express app running on port " + 5000);
})

