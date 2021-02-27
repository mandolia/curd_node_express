
const dbconn = require('../../config/db.config');
var dbConn = require('../../config/db.config');

// table fetch 
var Employee = function(employee){
    this.first_name = employee.first_name;
    this.last_name  = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.salary = employee.salary;
    this.create_at = new Date();
    this.update_at = new Date();
}


//get alll employee 
 
Employee.getAllEmployees = (result)=>{
    dbConn.query('SELECT * FROM employee',(err,res)=>{
        if(err) throw err
        console.log("fetch success");
        result(null,res)
    });
};
 

//get empoloye by id from db

Employee.getAllEmployeeByID =(id,result)=>{
    dbConn.query('SELECT * FROM employee where id=?',id,(err,res)=>{
        if(err) {
            console.log("Error while fetching employee by id ",err)
            result(null,err)
        }else{
            result(null,res)
        }

    })
}


//create new employee 
Employee.createEmployee =(employeeReqData,result)=>{

    dbConn.query('INSERT INTO employee SET ? ',employeeReqData),(err,res)=>{
        if(err){
            console.log('error while fetch employe',err)
            result(null,err)
        }else{
            result(null,res)
        }
    };
}


//update employee 
Employee.updateEmployee = (id,employeeReqData,result)=>{

   dbConn.query("UPDATE employee SET first_name=?,last_name=?,email=?,phone=?,organization=?,salary=?,create_at=?,update_at=? WHERE id =?",[employeeReqData.first_name,employeeReqData.last_name,employeeReqData.email,employeeReqData.phone,employeeReqData.organization,employeeReqData.salary,employeeReqData.create_at,employeeReqData.update_at,id], (err,res) =>{
  
    if(err){
            result(null,err);
        }else{
            result(null,res);
        }

    })
}
Employee.deleteEmployeeById = (id,result)=>{
    dbconn.query('delete from employee where id =?',id,(err,res)=>{
        if(err){
            result(null,err)
        }else{
            result(null,res)
        }
    })
}
 
module.exports = Employee;