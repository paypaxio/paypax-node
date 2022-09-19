# PayPax Node.js Library

[![Version](https://img.shields.io/npm/v/paypax-node.svg)](https://www.npmjs.org/package/paypax-node)
[![Downloads](https://img.shields.io/npm/dm/paypax-node.svg)](https://www.npmjs.com/package/paypax-node)
[![Try on RunKit](https://badge.runkitcdn.com/paypax-node.svg)](https://runkit.com/npm/paypax-node)

The PayPax Node library provides convenient access to the PayPax Merchant API from
applications written in server-side JavaScript.

## Documentation

See the [`paypax-node` API docs](https://paypax.io/en/api/merchant) for Node.js.

## Requirements

Node 12 or higher.

## Installation

Install the package with:

```sh
npm install paypax-node --save
# or
yarn add paypax-node
```

## Usage
The package needs to be configured with your merchant's secret key, which is
available in the [PayPax Merchant API](https://paypax.io/en/api/merchant "PayPax Merchant API"). Require it with the key's
value.

### Create Order
Simply you can pass your internal order's info:

```js
const Paypax = require('paypax-node');
const paypax=new Paypax('your merchant api key',true);
paypax.createOrder({
    amount:'100',//original amount in USD<string>
    orderId:'12345',//your internal order id<string>
    callBackUrl:'https://example.com/callback',//your callback processor url<string>=>GET HTTP METHOD
    description:'this is a test order',//optional description about this order to be recorded
})
    .then(response => console.log(response))
    .catch(error => {
        console.error(error?.response?.data)
    });
//expecting successful data:
/*
*   {
*	    ok:boolean,
*	    orderId:string,
*	    trackingId:string,//numeric string
*	    paymentUrl:string,//url which is returned from paypax to redirect user to that
*    }
*/
```

### Verify Order Payment
Simply you can pass your paypax order Id and verify it it's paid or not:
```js
const Paypax = require('paypax-node');
const paypax=new Paypax('your merchant api key',true);
paypax.verifyPayment('paypax order id here')
    .then(response => console.log(response))
    .catch(error => {
        console.error(error?.response?.data)
    });
//expecting successful data:
/*
*   {
*	    ok:boolean,
*	    orderId:string //PayPax order id
*   }
*/
```
