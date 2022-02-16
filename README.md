# crypto_price_api

Deno Api to get the current cryptoprices in different currencies. The prices are used by the exchange <mark> Coinbase </mark>.

## Installation

Import the crypto_price_api.ts file in your personal project

Then type in the following code in your JavaScript-File:

```ruby
import { CryptoPriceApi } from "./crypto_price_api.ts"
```

## Usage


### getSpotPrice

Returns the current spotprice of every cryptocurrency listed on <mark> Coinbase </mark>

#### Example

```ruby
let test 
test = new Crypto_Price_Api();
console.log(await test.getSpotPrice('LINK','EUR')); // 15.4
```

For more advanced traders you can also get the buy and sell prices for each currency on <mark> Coinbase </mark>

### getBuyPrice

Returns the current buyprice of every cryptocurrency listed on <mark> Coinbase </mark>

#### Example

```ruby
let test 
test = new Crypto_Price_Api();
console.log(await test.getBuyPrice('LINK','EUR')); // 15.50
```

### getSellPrice

Returns the current buyprice of every cryptocurrency listed on <mark> Coinbase </mark>

#### Example

```ruby
let test 
test = new Crypto_Price_Api();
console.log(await test.getSellPrice('LINK','EUR')); // 15.31
```

All supported cryptocurrencies you can see on the following [Website](https://www.coinbase.com/de/price):

