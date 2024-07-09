//import express from'express';
//import code from 'qrcode';
const express = require('express');
const code=require('qrcode');
const a=require("fs");
const app=express();
const port=5000;
app.get('/qrcode',(req,res)=>
{
    const url='https://jbtechsolutions.github.io/Home/';
    code.toDataURL(url,(err,qrCodeUrl)=>{
        if(err)
        {
            res.status(5000).send('InternalServer Error');
        }
        else{
            res.send(`
                <!DOCTYPE HTML>
                <html>
                    <head>
                        <title>QR Code Generator</title>
                    </head>
                    <body>
                        <h1>QR Code Generator</h1>
                        <img src="${qrCodeUrl}"alt="QR Code">
                        <p>Scan the QR Code to visit website</p>
                        </img>
                    </body>
                </html>
            `)
        }
    });
});
app.listen(port,()=>
{
    console.log('Server is running on port  ${port}');
});