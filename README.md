# PaymentGetway

# PayU Money API Implementation

It allows online businesses to accept and process payments through payment methods that can be integrated with web and mobile applications

-[PayU Money Document](https://payu.in/payment-gateway/)
    
## Requirements

 - [Create PayU Account](https://payu.in/)
 - [Install Node Js ](https://nodejs.org/en/)
 


## Project Clone link

https://github.com/kajalblog/PaymentGetway.git


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`BASE_URL`

`PAYU_MERCHANT_KEY`

`PAYU_MERCHANT_SALT_VARSION1`

`PAYU_MERCHANT_SALT_VARSION2`

`PAYU_URL`



## Run Locally

Clone the project

```bash
  git clone https://github.com/kajalblog/PaymentGetway.git
```

Go to the project directory

```bash
  cd PaymentGetway
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm node app.js
```


## Roadmap

- Created serve for run the node project (app.js file)

- Created router for API methods(router.js- here we create post method)

- Import router in app.js

- For processing post method we need  credentials key,txnid,productinfo,amount,first_name,email,phone,callback_url,fail_url,hash.

- path of post method (http://localhost:4800/check/payment_getway/payumoney).

-{
 
  "txnid":"1452563",
  "productinfo":"testing",
  "amount":500,
  "orderNote":"testing",
  "first_name":"Rushikesh",
  "email":"Rushikesh@gmail.com",
  "phone":"8954527856"
 }

- For hash we need to install jssha package (It generate specifice SHA hash string)

- hash value is nothing but generated string values based on all creadentials we have passed for payments

- Also we can create view part(If needed) in node js using ejs Template Engine or

- We acn implement UI in Front-End(Angular)


## Front-End Project Clone link

https://github.com/kajalblog/PayUMoney-In-Angular.git