const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');
router.get('/',(req,res)=>{

    res.render('employee/addOrEdit',{viewTitle:"Inset Employee"});
});

//post

router.post('/',(req,res)=>{
    if(req.body._id == "")
    insertRecord(req,res);
    else
    updateRecord(req,res);
})




function insertRecord(req,res){
var employee = new Employee();

employee.fullName = req.body.fullName;
employee.eamil = req.body.fullName;
employee.mobile = req.body.mobile;
employee.city = req.body.city;

employee.save((err,doc)=>{
    if(!err) res.redirect("employee/list");
    else{
        console.log(`Error during recond insertion : ${err}`);
    }
});

}

// update functio

function updateRecord(req,res){

    Employee.findOneAndUpdate({_id:req.body._id},req.body,{new:true},(err,doc)=>{
if(!err){res.redirect("employee/list");}
else{
    if(err.name == "ValidationError"){
        handleValidationError(err,req.body);
        res.render("employee/addOrEdit",{
            viewTitle:"update Employee",
            employee:req.body
        })
    }
}
    });
}


router.get("/list",(req,res)=>{

Employee.find((err,docs)=>{
if(!err){
    res.render("employee/list",{
        list:docs
    });
} else{
    console.log('Error in retrieving employee');
}

});
});


// put or edit 
router.get("/:id",(req,res)=>{
Employee.findById(req.params.id,(err,doc)=>{
    if(!err){
res.render("employee/addOrEdit",{
    viewTitle:"Update Employee",
    employee:doc
})
    }
});

});

router.get('/delete/:id',(req,res)=>{
Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
if(!err){
    res.redirect("/employee/list");
}
else{console.log('Error in employee :' + err);}
});

});

module.exports = router;
