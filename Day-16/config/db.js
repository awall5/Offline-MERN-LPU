const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://awal05:1234@cluster0.eadcm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      dbName: "Day-16",
    }
  )
  .then(() => {
    console.log("-------DB Connected-----------");
  })
  .catch((err) => {
    console.log("---------Error-----------------", err.message);
  });
