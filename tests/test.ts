import { CryptoPriceApi } from '../crypto_price_api.ts'
let test 

//test 1
test = new CryptoPriceApi();
console.log(await test.getSpotPrice('LINK','EUR'));

//test 2
test = new CryptoPriceApi();
console.log(await test.getBuyPrice('LINK','EUR'));

//test 3
test = new CryptoPriceApi();
console.log(await test.getSellPrice('LINK','EUR'));