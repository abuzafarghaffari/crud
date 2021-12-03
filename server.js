require("./models/db");
require("dotenv").config();
const express= require("express");
const employeeController = require("./controllers/emplioyeeController");
const exphbs = require("express-handlebars");
const path = require('path');


const PORT = process.env.PORT;
var app = express();

const engine = exphbs.engine;

// parse incooming data

app.use(express.urlencoded());
app.use(express.json()); 

app.engine('.hbs', engine({
    extname:'.hbs',
    defaultLayout:'mainLayout',
    layoutsDir:__dirname + '/views/layouts/'
}));

app.set('view engine', '.hbs');
app.set('views',path.join(__dirname,'/views/')); // set views folder path


app.use('/employee',employeeController);


app.listen(PORT,()=>console.log(`server is running on port:${PORT}`));