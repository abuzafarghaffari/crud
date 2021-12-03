const mongoose = require("mongoose");

var employeeSchema = new mongoose.Schema({
    fulName:String,
    email:String,
    mobile:String,
    city:String
});

mongoose.model('Employee',employeeSchema);