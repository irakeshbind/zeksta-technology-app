const mongoose = require("mongoose");
const addEmp = new mongoose.Schema({
  // id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  

});
module.exports = mongoose.model("addEmployee", addEmp);
