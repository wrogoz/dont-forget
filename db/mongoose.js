const mongoose = require('mongoose');
const chalk = require('chalk')
mongoose.connect("mongodb+srv://test:test@dontForget.un0gw.mongodb.net/dontForget?retryWrites=true&w=majority" || 'mongodb://localhost:27017/dont-forget', {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})
.then(()=>{
    console.log(chalk.blue.underline.bold('db connected'))
});

