const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.URL;
require("./employee.model");

async function main(){
    
await mongoose.connect(url);
console.log(`mongoose db connected`);
    
}

main().catch(err => console.log(err));