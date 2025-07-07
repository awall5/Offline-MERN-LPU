const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB_URL,
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
