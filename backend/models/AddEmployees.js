const mongoose= require('mpongoose')
const addEmployee = new mongoose.Schema({
     // id: { type: mongoose.Schema.Types.ObjectId },
     name:{type:string,require:true},
     email:{type:String, require:true},
     address:{type:String, require:true},
     phone:{type:String, require:true},

})
module.exports = mongoose.model('addEmployees',addEmployee);
