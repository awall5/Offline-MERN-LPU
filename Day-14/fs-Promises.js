//
const fsPromises = require("node:fs/promises");

const main = async () => {
  console.log("---------------------START>>>>>>>>>>>>>>>>>>>>>>>>>>");

  const res = await fsPromises.readFile("./tem.txt", "utf-8"); // utf-8 likhdo ussee string mao convert hojyega
  console.log(res);

  console.log("---------------------MID>>>>>>>>>>>>>>>>>>>>>>>>>>");

  const res2 = await fsPromises.readFile("./Student.txt", "utf-8"); // utf-8 likhdo ussee string mao convert hojyega
  console.log(res2);

  console.log("---------------------END>>>>>>>>>>>>>>>>>>>>>>>>>>");
};

main();

// console.log(res.toString()); // YA toh aise krlo convert ya fir

//It is seames like synchronus func ---Promises
