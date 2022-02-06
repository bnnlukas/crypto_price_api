import { Crypto_Price_Api } from "./crypto_price_api.ts"
let test 

//test 1
test = new Crypto_Price_Api();
console.log(await test.getCurrentPrice('BCH','EUR'));
