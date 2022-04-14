// fs-> file system module -> it helps us to make files/folders append data in them , delete data , read data
// const fs = require("fs");//require("path_of_the_file");

// appendfilesync appends data into a file , if file is not present, it creates the file and then appends the data
                // file path // data to be appended

// let res=fs.appendFileSync("f5.txt","hello i am f5 file");
// fs.appendFileSync("f5.txt","hfjdidiss");
// console.log(res);
// const abc=require("./f5.txt");
// console.log(abc);
// when you have to go out of a node file

const abcd=require("../FJP-5(WEB DEVELOPMENT)/temp");
// /require method , goes to the file that is needed to be required. executes that file. and if there is something that is exported we get that in variable 'abcd'
console.log(abcd);

// let data = fs.readFileSync("f5.txt","utf-8");
//data recieved is an object type , data is in buffer format. For it to be readbale , we convert it from buffer to string . 
// console.log(data+""); //automatic type conversion se buffer string mein conver tho gayi h 