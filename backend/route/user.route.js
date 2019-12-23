const express=require("express");
const userCtrl=require("../controller/user.controller");
const router=express.Router();
router.get("/user",userCtrl.user);
router.get("/user/name:",userCtrl.userByname);
module.exports=router;