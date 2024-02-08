const { log } = require('console');
const express = require('express');
const app = express();

const path = require('path');
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

let port = 4000;

app.get('/ig/:username',(req,res)=>{
    let followers= ["ritul","prinjal","neha"];
    let {username} = req.params;
    res.render("insta.ejs",{username , followers})
})
app.listen(port,(req,res)=>{
    console.log("req recived");
})