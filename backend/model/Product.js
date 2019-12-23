/*class Product{
    constructor(name,description,id){
        this.name=name;
        this.description=description;
        this.id=id;
    }
}
module.exports=Product;*/

const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    id:{
        type:String
    }
});
/**
 * @typedef Iconset
 */
module.exports=mongoose.model("Product",productSchema);