# crypto_price_api

Deno Api to get the current cryptoprices in different currencies. The prices are used by the exchange Coinbase.

## Installation

Import the crypto_price_api.ts file in your personal project

Then type in the following code in your JavaScript-File:

```ruby
import { Crypto_Price_Api } from "./crypto_price_api.ts"
```

## Usage


### getCurrentPrice

Returns the current price of every cryptocurrency listed on Coinbase

#### Example

```ruby
let test 
test = new Crypto_Price_Api();
console.log(await test.getCurrentPrice('LINK','EUR')); // { base: "LINK", currency: "EUR", amount: "15.58" }
```

All supported cryptocurrencies you can see on the following [Website](https://www.coinbase.com/de/price):

