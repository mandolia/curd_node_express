const express = require('express');
const { verify } = require('jsonwebtoken');
const router  = express.Router();
const employeeController  = require('../controller/employeeController');

//get all employee
router.get('/',verifyToken,employeeController.getEmployeeList);
//get employee by id 
router.get('/:id', employeeController.getEmployeeByID);
//create new employee
router.post('/', employeeController.createNewEmployee);
//update new empoloyee 
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id',employeeController.deleteEmployeeById);


//formate for token 
//Authorization : Bearer    <access_token>


// verify token 

function verifyToken(req,res,next){
 //get auth header  value 
 const bearerHeader = req.headers['authorization'];

 if(typeof  bearerHeader !=='undefined'){
    const bearer = bearerHeader.split(' ')[1];
    req.token = bearer;
    next();
 }else{
    //forbidden
    res.json({status:false,message:'token required'})
    res.sendStatus(403);
    
 }
}
module.exports = router;