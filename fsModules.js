//import {readFileSync,writeFileSync} from 'fs';
const a=require("fs");
let fileContent = a.readFileSync('./msg.txt','utf-8');
console.log(fileContent);
let newfile='About : ${fileContent}';
a.writeFileSync('newfile.txt',newfile,'utf-8');
console.log('Data is written in a new file succes');
