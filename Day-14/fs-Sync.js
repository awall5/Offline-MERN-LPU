//
console.log("---------------------START>>>>>>>>>>>>>>>>>>>>>>>>>>");

const fs = require("node:fs");

const res = fs.readFileSync("./tem.txt", "utf-8"); // utf-8 likhdo ussee string mao convert hojyega
console.log(res);

console.log("---------------------MID>>>>>>>>>>>>>>>>>>>>>>>>>>");

const res2 = fs.readFileSync("./Student.txt", "utf-8"); // utf-8 likhdo ussee string mao convert hojyega
console.log(res2);

console.log("---------------------END>>>>>>>>>>>>>>>>>>>>>>>>>>");

// console.log(res.toString()); // YA toh aise krlo convert ya fir

//Sync usek krenge toh computer saare kaam chorkke humara kaam krega
