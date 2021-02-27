
const { emit } = require('nodemon');
const Employee = require('../models/employeeModel');
const EmployeeModel = require('../models/employeeModel');

var jwt = require('jsonwebtoken');
 
//get employee list 
exports.getEmployeeList = (req, res) => {
    EmployeeModel.getAllEmployees((err, employee) => {
        if (err)
            // res.send(err)
          console.log("employee", employee)
        // res.send(employee);
var token = jwt.sign({ employee }, 'Bearer');
        res.json({status:true,data:employee,token:token})
    });
}


// get employee with id
exports.getEmployeeByID = (req,res)=>{
    EmployeeModel.getAllEmployeeByID(req.params.id,(err,employee)=>{
        if(err)
        res.send(err);
        res.json({status:success,data:employee});
    })
}
// creat new employee  
exports.createNewEmployee = (req,res)=>{
     const employeeReqData = new EmployeeModel(req.body);
 
    if(req.body.constructor === Object && Object.keys(req.body).length===0){
        res.send(400).send({success:false,message:'please fill  all fields'})
    }else{
        EmployeeModel.createEmployee(employeeReqData,(err,employee)=>{
            if(err)
                res.json({status:true,message:"success",data:employee});
        })
    }

}


//update employee with the given value 

exports.updateEmployee = (req,res) => {
    const employeeReqData = new EmployeeModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send({success:false,message:'please fill all field'})
    }else{
        EmployeeModel.updateEmployee(req.params.id, employeeReqData,(err,employee)=>{
            if(err){
               
                res.send({status:false,message:'data not updated'})
            }else{
               
                res.json({status:true,message:'success updated ',data:employeeReqData})
            }
    
        })
    }
}


//delete employee with id in employee id
exports.deleteEmployeeById = (req,res) =>{
        EmployeeModel.deleteEmployeeById(req.params.id,(err,empoloye)=>{
                if(err){
                    res.json({status:false,message: err})
                }else{
                    res.json({status:true,message:'success deleted ',data:empoloye})
                }
        })
}