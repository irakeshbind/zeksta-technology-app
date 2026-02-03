const express = require("express");
const router = express.Router();
const EmpAdd = require("../models/AddEmployees.js");
const checkoutAuth = require("../middleware/checkAuth.js");
// add empoyee  api
router.post("/addEmployees",checkoutAuth, async (req, res) => {
  try {
    const addEmp = new EmpAdd({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      
    });

    const addData = await addEmp.save();

    res.status(201).json({
      success: true,
      data: addData,
    });
  } catch (err) {
    console.log(err);
  }
});





//  get employees data api
//
router.get("/getAllEmployee", checkoutAuth, async (req, res) => {
  try {
    const getData = await EmpAdd.find();
    res.status(200).json({
      getEmployees: getData,
    });
  } catch (err) {
    console.log(err);
  }
});





// get by id
router.get("/getAllEmployeebyid/:id", checkoutAuth, async (req, res) => {
  try {
    const getData = await EmpAdd.findById(req.params.id);
req
    if (!getData) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.status(200).json({
      getEmployees: getData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error",
    });
  }
});








// updated employees by id
router.put("/updateemployees/:id", checkoutAuth, async (req, res) => {
  try {
    const updateData = await EmpAdd.findByIdAndUpdate(
       req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
      },
      { new: true },
    );

    if (!updateData) {
      res.status(400).json({
        messge: "employee not found",
      });
    }
    res.status(200).json({
      messgage: "updated succesfully",
      data: updateData,
    });
  } catch (err) {
    console.log(err);
  }
});
//  delete employee by id
router.delete("/deleteEmployee/:id", checkoutAuth, async (req, res) => {
  try {
    const deleteData = await EmpAdd.findByIdAndDelete({  _id: req.params.id,
      Uid: req.user.id,});
    res.status(200).json({
      delete: deleteData,
    });
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;
