require('./config/db.config');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

//parse request data content type application/x-www-form-ruleencoded 


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())


//parse request data  content type application/json
const port  = process.env.APP_PORT || 8080
app.get('/',(req,res)=>{
 res.send("hello world")
});


const employeeRoutes = require('./src/routes/employee.route')
// create employee routes 


app.use('/api/v1/employees',employeeRoutes);
app.listen(port,()=>{console.log(`listen at port ${port}`)});


