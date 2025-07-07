const express = require("express");

const { Product } = require("./models/product_schema");
const app = express();


require("./config/db");

app.use(express.json()); //Iske vaje se express json ko pdh pyega

app.get("/", (req, res) => {
  res.status(200);
  res.json({
    isSucess: true,
    message: "Yes you had done this ! Server is Running...", //Passing the object in this like json format
    data: {},
  });
});

app.post("/api/v1/products", async(req, res) => {
  try {
    const data = req.body;
    const newProduct = await Product.create(body);
    res.status(201);
    res.json({
      isSucess: true,
      message: "Product Created.", //Passing the object in this like json format
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    console.log("There is an error in POST Product ", err.message);
    console.log("---------------------");
    res.status(501);
    res.json({
    isSucess: true,
    message: "Internal Server Error", //Passing the object in this like json format
    data: {
        errMessage: err.message,
    },
  });
  }
});

app.listen(2000, () => {
  console.log("-------------Server Started------------");
}); //4 digit number
