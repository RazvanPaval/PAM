console.log("---- Starting the backend -----");

const cors=require("cors");
const express = require("express");
const app = express();
const productRouter = require("./route/product.route");
const userRouter=require("./route/user.route");

//nou in cod

const Product=require("/model/Product");

const mongoose=require("mongoose");
const url="mongodb://localhost:27017/login";

mongoose.connect(url,{
  useNewUrlParser:true,
  useUnifiedTopology:true

});
_fillUpDB();
 

app.use(cors());
app.use("/", userRouter);

app.listen(3002, () => {
  console.log("listening on 3002");
});

// si ce este aici
function _fillUpDB() {
  const products = [];
  products.push(
    new Product({ name: "Apa", description: "Apa minerala", id: 1 })
  );
  products.push(
    new Product({ name: "Galuste", description: "Cu prune", id: 2 })
  );
  products.push(
    new Product({ name: "Branza", description: "Mozzarella", id: 3 })
  );

  for (const p of products) {
    p.save();
  }
}