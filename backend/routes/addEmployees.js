const express = require("express");
const router = express.Router();
const EmpAdd = require("../models/AddEmployees.js");
const { route } = require("./addEmployees.js");

// add empoyee  api
router.post('/addEmployees', async(req,res)=>{
try{
    const addEmp = new EmpAdd({
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        phone:req.body.phone
    })
    const addData = await addEmp.save();
    res.status(200).json({
        data:addData
    })

}catch(err){
    console.log(err);

}
})

//  get employees data api 
// 
router.get('/getAllEmployee',async(req,res)=>{
try{
    const getData = await EmpAdd.find();
       res.status(200).json({
        getEmployees:getData
       })
}catch(err){
    console.log(err)
}
})


module.exports = router;
