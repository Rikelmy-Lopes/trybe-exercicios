const findCrypto = async () => {
    const API_URL = 'https://api.coincap.io/v2/assets';
    const coins = await fetch(API_URL)
      .then((response) => response.json())
      .then((data) => data.data)
      .catch((error) => error.toString())
    return coins;
}

const convertCoins = async () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': `/currencies/usd.min.json` }
      };
    const API_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';
    const convert = await fetch(API_URL, myObject)
    .then((response) => console.log(response))
    
}

const setCoins = async () => {
    const coins = await findCrypto();
    const ul = document.getElementById('criptos');
    
    coins.filter((_, index) => index < 10).forEach((coin) => {
        const newLi = document.createElement('li');
        const usdPrice = Number(coin.priceUsd);
        newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`
        ul.appendChild(newLi)
    })
}
window.onload = () => setCoins();