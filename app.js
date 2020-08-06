require('dotenv').config()
const express = require('express')
require('./db/mongoose')
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')
const registrationRoute = require('./routes/registrationRoute')
const chalk = require('chalk')
const app = express()



app.use(express.json())
app.use(registrationRoute)
app.use(userRoute)
app.use(authRoute)



const port = process.env.PORT || 3000 ;

app.listen(port, () => {
    console.log(chalk.blue(`App listening on port ${port}`));
});