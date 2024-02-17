let allCoins = document.getElementById("allCoins");
let btcCoin = document.getElementById("btc-coin");
let ethCoin = document.getElementById("eth-coin");
let singleCoin = document.getElementById("singleCoin");
const closeIcon = document.querySelector(".close-icon");
const display = document.querySelector(".display");


fetch("https://api.coinlore.net/api/ticker/?id=90")
.then((res) => {
  return res.json();
}).then((data) => {
  let btcData = "";
  data.map((coin) => {
    btcData = `<div class="card-item">
    <div class="coin-img-container">
    <img id="coin-img" src="images/btc-logo.png">
    <span>${coin.name}</span>
    </div>
    <p>$${coin.price_usd}</p>
    <p class="${coin.percent_change_1h < 0.0 ? "percent1":"percent2"}">${coin.percent_change_1h}%
    </p>
    </div>`
  })
  btcCoin.innerHTML = btcData
}).catch((err) => console.log(err));


fetch("https://api.coinlore.net/api/ticker/?id=80")
.then((res) => {
  return res.json();
}).then((data) => {
  let ethData = "";
  data.map((eth) => {
    ethData = `<div class="card-item">
    <div class="coin-img-container">
    <img id="coin-img" src="images/eth-logo.png">
    <span>${eth.name}</span>
    </div>
    <p>$${eth.price_usd}</p>
    <p class="${eth.percent_change_1h < 0.0 ? "percent1":"percent2"}">${eth.percent_change_1h}%
    </p>
    </div>`
  })
  ethCoin.innerHTML = ethData
}).catch((err) => console.log(err));




// ALL CRYPTOCURRENCIES

fetch("https://api.coinlore.net/api/tickers/?start=0&limit=50").then((data) => {
  return data.json();
}).then((coins) => {
  let coinData = "";
  coins.data.map((coin) => {
    coinData += `
    <div class="home-card-item coin-info" data-Id="${coin.id}">
      <div class="name">
      <span>${coin.name}</span>
      </div>
      <div class="price">
      <p>$${coin.price_usd}</p>
      </div>
      <div class="percent">
      <p class="${coin.percent_change_1h < 0.0 ? "percent1":"percent2"}">${coin.percent_change_1h}%
      </p>
      </div>
      <div class="percent p2">
      <p class="${coin.percent_change_24h < 0.0 ? "percent1":"percent2"}">${coin.percent_change_24h}%
      </p>
      </div>
      <div class="percent p3">
      <p class="${coin.percent_change_7d < 0.0 ? "percent1":"percent2"}">${coin.percent_change_7d}%
      </p>
      </div>
      <div class="market mc">
      <p id="mkt">$${coin.market_cap_usd}</p>
      </div>
    </div>`
  });
  allCoins.innerHTML = coinData;
}).catch((error) => console.log(error));


allCoins.addEventListener("click", (e)=> {
  let coinInfo = e.composedPath().find((single_coin) => {
    if(single_coin.classList){
      return single_coin.classList.contains("coin-info");
    }
    else{
      return false
    }
  })
  if(coinInfo){
    let coinID = coinInfo.getAttribute("data-Id");
    getSingleCoinId(coinID);
  }
});


function getSingleCoinId(coinID){
  fetch(`https://api.coinlore.net/api/ticker/?id=${coinID}`)
  .then((res) => {
    return res.json()
  }).then((coins) => {
    let coin = coins[0];
    addCoinToDOM(coin);
  })
}

function addCoinToDOM(coin){
  singleCoin.innerHTML = `
  <div class="item1">
    <p class="item1-rank">Rank #${coin.rank}</p>
    <h3>${coin.name} 
    <span class="symbol">${coin.symbol}</span>
    </h3>
    <h5>$${coin.price_usd} 
    <span class="item1-percent ${coin.percent_change_1h < 0.0 ? "percent1":"percent2"}">${coin.percent_change_1h}%
    </span>
    </h5>
  </div>
  
  <div class="item2">
    <p class="price-card">
      <span class="coin-data">Market Cap</span> <br>
      $${coin.market_cap_usd}
    </p>
    <p class="price-card">
      <span class="coin-data">Circulating Supply</span> <br>
      ${coin.csupply}
    </p>
    <p class="price-card">
      <span class="coin-data">Total Supply</span> <br>
      ${coin.tsupply}
    </p>
    <p class="price-card">
      <span class="coin-data">Volume 24h</span> <br>
      $${coin.volume24}
    </p>
    <p class="price-card">
      <span class="coin-data">Price Change (1h)</span> <br>
      <span class="${coin.percent_change_1h < 0.0 ? "percent1":"percent2"}">${coin.percent_change_1h}%
      </span>
    </p>
    <p class="price-card">
      <span class="coin-data">Price Change (24h)</span> <br>
      <span class="${coin.percent_change_24h < 0.0 ? "percent1":"percent2"}">${coin.percent_change_24h}%
      </span>
    </p>
  </div>`
}

allCoins.addEventListener("click", function(){
  display.classList.add('open-display');
})

closeIcon.addEventListener("click", function(){
  display.classList.remove('open-display');
})







