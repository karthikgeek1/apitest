const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const otpgenerator = require('otp-generator')
const apidata = require('../data.json')

app.get('/services', (req,res)=>{
    res.send(apidata)
})

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(3000, ()=>{
    console.log('listening')
})