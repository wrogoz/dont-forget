const mongoose = require('mongoose');
const chalk = require('chalk')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dont-forget', {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})
.then(()=>{
    console.log(chalk.blue.underline.bold('db connected'))
});

