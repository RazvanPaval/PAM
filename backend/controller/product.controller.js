//const Product = require("../model/Product");
const ProductDto = require("../dto/Product");
const productService = require("../service/product.service");
const productCtrl = {};

//const products = [];
//products.push(new Product("Apa", "Apa minerala", 1));
//products.push(new Product("Branza", "20 grame", 2));
//products.push(new Product("Paine", "Cu seminte", 3));
//productCtrl.product = (request, response) => {
productCtrl.product = async (request, response) => {
  const products = await productService.allProducts();//linii noi
  response.send(products);
};

/*productCtrl.productById = (request, response) => {
  console.log(request.params.id);

  response.send(products.find(p => p.id === parseInt(request.params.id)));
};
*/

productCtrl.productById = async (request, response, next) => {
  const productId = request.params.id;
  productService
    .getProductById(productId)
    .then(product => response.send(product))
    .catch(err => {
      console.log("here");
      next(err);
    });
};
module.exports = productCtrl;