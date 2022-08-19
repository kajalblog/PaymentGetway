# PaymentGetway

# PayU Money API Implementation

It allows online businesses to accept and process payments through payment methods that can be integrated with web and mobile applications

    
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

- Create serve for run the node project (app.js file)

- Create router for API methods(router.js- here we create post method)

- Import router in app.js

- For processing post method we need  credentials key,txnid,productinfo,amount,first_name,email,phone,callback_url,fail_url,hash.

- path of post method (http://localhost:4800/check/payment_getway/payumoney).

- For hash we need to install jssha package (It generate specifice SHA hash string)


 


