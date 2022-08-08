const  express=require("express");
const router=express.Router();
const {homeController}=require('../controller/homeController.js')

router.get('/demo',homeController)
module.exports= router