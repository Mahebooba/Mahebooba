import { fileURLToPath } from "url";
import path from 'path';
import {readFile,writeFile}from 'fs';
const_filename=fileURLToPath(import.meta.url);
const_dirname=path.dirname(_filename);
console.log(__dirname);
readFile(path.join(_dirname,'database','employees','emp.json'),'utf-8',(err,data)=>{
    if(err)throw err;
    let customers=JSON.parse(data);
    writeFile(path.join(_dirname,'util','customer.json'),JSON.stringify(customers),'utf-8',(err,data)=>{

    if(err)throw err;
    console.log('Data written succesfully');
    });
})