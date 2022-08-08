const express = require("express");
const router = express.Router();
// require('dotenv/config');
require('dotenv/config');
const jsSHA=require('jssha');

router.post("/payment_getway/payumoney", (req, res) => {
  const txnid = `GT-${Math.round(new Date().getTime() + Math.random() * 100)}`;
  const plan_name = "test";
  const first_name = "test";
  const email = "testexample@gmail.com";
  let res_details = {};
  res_details.txnid = txnid;
  res_details.service_provider = "";
  res_details.amount = 500;
  res_details.plan_name = plan_name;
  res_details.callback_url =`${process.env.BASE_URL}/pyment/success`;
  res_details.first_name = first_name;
  res_details.email = email;
  res_details.mobile = "9850456258";
  res_details.payu_merchant_key = process.env.PAYU_MERCHANT_KEY;
  res_details.payu_merchant_salt1 =process.env. PAYU_MERCHANT_SALT_VARSION1;
  res_details.payu_merchant_salt2 = process.env. PAYU_MERCHANT_SALT_VARSION2;
  res_details.pay_url = process.env. PAYU_URL;
  res_details.fail_url=`${process.env.BASE_URL}/payment/fail`;

  const hashingKey=`${process.env.PAYU_MERCHANT_KEY}|${txnid}|${500}|${plan_name}|${email}|||||||||||${process.env.PAYU_MERCHANT_SALT_VARSION1}`;
//   res_details.payu_sha_token=crypto.creatHash()
const sha = new jsSHA('SHA-512', "TEXT");
sha.update(hashingKey);
// //Getting hashed value from sha module
 const hash = sha.getHash("HEX");
 res_details.hash=hash;
    

 res.json({
    info:res_details
 })
//   console.log("testing demo....");
//   console.log(req.body);
});
router.post('/patment/success',(req,res)=>{
    res.redirect("localhost:/4800");
    console.log('success');
});
router.post('/patment/fail',(req,res)=>{
    res.redirect("localhost:/4800");
    console.log('fail');
})

module.exports = router;
