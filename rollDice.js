const express = require('express');
const app = express();
const path = require('path');
// const { PassThrough } = require('stream');

//passing data to ejs

app.set("view engine","ejs");
app.set("views" , path.join(__dirname,'/views'));


app.get('/rollDice',(req,res)=>{
    let diceVal = Math.floor(Math.random() * 6)+1;
    res.render("rollDice.ejs",{diceVal})
    console.log("request");
})


app.listen(4000,(req,res)=>{
    console.log("request recived");
})