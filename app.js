const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routers = require('./src/api/routes');
const app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://root:root@cluster0.15xsn.mongodb.net/tareadb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("se Conecto a la BD sin problemas");
}).catch(err => {
    console.log("Existe un problema: " + err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routers(app);

app.listen(5000, (err) => {
    if (err) throw err;
        console.log("Se inicio in http://127.0.0.1:5000")
})