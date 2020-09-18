# Paytm's internal API for Node.js
Reverse engineered paytm's api wrapper written in Node.js

<hr>

# Instructions

### Installation
Install using npm
```sh
$ npm install node-paytm-api
```

### Usage
You can simply require/import and use the Wrapper.

Example.
```js
const Paytm = require('node-paytm-api')
const paytm = new Paytm({ number: '+919876543210', 'MyPassword' }) 
```
- after creating class instance you will be recieving OTP on your provided number. 
- Then you can verify OTP using `verifyOtp`

```js
paytm.verifyOtp('1234')
```
