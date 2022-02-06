let fiat_currency
let crypto_currency

export class Crypto_Price_Api {

    async getCurrentPrice(crypto_currency:String, fiat_currency:String) {
        let data = await fetch(`https://api.coinbase.com/v2/prices/${crypto_currency}-${fiat_currency}/spot`);
        let json = await data.json();
        return json.data;
    }
}