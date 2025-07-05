//
console.log("---------------------START>>>>>>>>>>>>>>>>>>>>>>>>>>");

const fs = require("node:fs");

const res = fs.readFile("./tem.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error is occured : ", err.message);
  } else {
    console.log("Tem Data--->>>", data);
  }
});

console.log("---------------------MID>>>>>>>>>>>>>>>>>>>>>>>>>>");

const res2 = fs.readFile("./Student.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error is occured : ", err.message);
  } else {
    console.log("Student data--->>>", data);
  }
}); // utf-8 likhdo ussee string mao convert hojyega

console.log("---------------------END>>>>>>>>>>>>>>>>>>>>>>>>>>");

// console.log(res.toString()); // YA toh aise krlo convert ya fir


//aSync use krenge toh computer saare kaam Krke fir humari file run krega