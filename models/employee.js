const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "empId":{type:String,required:true},
        "empName":{type:String,required:true},
        "empSalary":{type:String,required:true},
        "empDesignation":{type:String,required:true}

    }
)
let employeemodel=mongoose.model("employees",schema);
module.exports={employeemodel} 