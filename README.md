# Paytm's internal API for Node.js
Reverse engineered paytm's api wrapper written in Node.js

<hr>

# Instructions

## Installation
Install using npm
```sh
$ npm install node-paytm-api
```

## Usage

### With Number and Password
You can simply require/import and use the Wrapper.

Example.
```js
const Paytm = require('node-paytm-api')
const paytm = new Paytm({ number: '+919876543210', 'MyPassword' }) 
```
- after creating class instance you will be recieving OTP on your provided number. 
- Then you can verify OTP using `verifyOtp`. The function will return Promise and you can have accessToken when resolved.

```js
const accessToken = await paytm.verifyOtp('1234')
```
- <b>Note</b>: AccessToken will be stored in class variable. Its only to use it later on.

- <h3>Once you login! You can use the account methods.

### With Access Token
You can use accessToken to initialize class instance too.

Example:
```js
const paytm = new Paytm({ accessToken: '<your accessToken here>' })
```

## Using Methods.
|    Method      |      Usage     |  Arguments | Return value |
| -------------- | --------------| ------------ | ------------ |
| getAccessToken | get accessToken when <br> successfully authenticated | None | `accessToken(String)` |
| getWalletHistory | retrieve wallet history of <br> user.  | (`offset`: optional, `limit`: optional) <br> `offset` - value to skip for front <br> `limit` - Retreival results for max at a time | `object -> array of transaction history` <br> (based on offset and limit)