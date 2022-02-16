let fiat_currency
let crypto_currency

export class CryptoPriceApi {

    async getSpotPrice(crypto_currency:String, fiat_currency:String) {
        let data = await fetch(`https://api.coinbase.com/v2/prices/${crypto_currency}-${fiat_currency}/spot`);
        let json = await data.json();
        return json.data.amount;
    }
    async getBuyPrice(crypto_currency:String, fiat_currency:String) {
        let data = await fetch(`https://api.coinbase.com/v2/prices/${crypto_currency}-${fiat_currency}/buy`);
        let json = await data.json();
        return json.data.amount;
    }
    async getSellPrice(crypto_currency:String, fiat_currency:String) {
        let data = await fetch(`https://api.coinbase.com/v2/prices/${crypto_currency}-${fiat_currency}/sell`);
        let json = await data.json();
        return json.data.amount;
    }
}