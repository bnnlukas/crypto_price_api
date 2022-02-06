import { Crypto_Price_Api } from '../crypto_price_api.ts'
let test 

//test 1
test = new Crypto_Price_Api();
console.log(await test.getSpotPrice('LINK','EUR'));

//test 2
test = new Crypto_Price_Api();
console.log(await test.getBuyPrice('LINK','EUR'));

//test 3
test = new Crypto_Price_Api();
console.log(await test.getSellPrice('LINK','EUR'));