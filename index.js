const express = require('express');
const app = express();
const path = require("path");
let port = 3000;


app.set("view engine","ejs");

//agr parent dir m jynge EJS_Delta ki to html page render nhi hoga pr simple res send hoga isliye hum index.js k andr views ko set krnge
//iska mtlb h ki __dirname = EJS_Delta + /views p jake views search krna aisa bol rhe hai taki error na aaye agr hum usko EJS_DELta k parent folder s chlye toh 

app.set("views",path.join(__dirname,"/views"));


app.get('/',(req,res)=>{
    //by default express views m jake search krlega home.ejs , ejs extension nhi likhnge to bhi chlega
    res.render("home.ejs");
})


//yh hoga 
app.get('/hello',(req,res)=>{
    res.send("hello");
})
app.listen(port,()=>{
    console.log(`app listening on ${port}`);
})