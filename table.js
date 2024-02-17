let allCoins = document.getElementById("allCoins");
let singleCoin = document.getElementById("singleCoin");
const closeIcon = document.querySelector(".close-icon");
const display = document.querySelector(".display");

fetch("https://api.coinlore.net/api/tickers/?start=0&limit=3")
.then((res) => {
  return res.json()
}).then((coins) => {
  let coinData = "";
  coins.data.map((coin) => {
    coinData += `
    <div class="home-card-item coin-info" data-Id="${coin.id}">
      <p>${coin.name}</p>
      <p>${coin.price_usd}</p>
      <p>${coin.percent_change_1h}</p>
      <p>${coin.percent_change_24h}</p>
      <p>${coin.market_cap_usd}</p>
    </div>`
  })
  allCoins.innerHTML = coinData;
})

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
    <p>Rank #${coin.rank}</p>
    <h3>${coin.name} 
    <span class="symbol">${coin.symbol}</span>
    </h3>
    <p>$${coin.price_usd} 
    <span>${coin.percent_change_1h}%</span>
    </p>
  </div>
  
  <div class="item2">
    <p class="price-card">
      <span>Market Cap</span> <br>
      $${coin.market_cap_usd}
    </p>
    <p class="price-card">
      <span>Circulating Supply</span> <br>
      ${coin.csupply}
    </p>
    <p class="price-card">
      <span>Total Supply</span> <br>
      ${coin.tsupply}
    </p>
    <p class="price-card">
      <span>Volume 24h</span> <br>
      $${coin.volume24}
    </p>
    <p class="price-card">
      <span>Price Change (1h)</span> <br>
      ${coin.percent_change_1h}%
    </p>
    <p class="price-card">
      <span>Price Change (24h)</span> <br>
      ${coin.percent_change_24h}%
    </p>
  </div>`
}

allCoins.addEventListener("click", function(){
  display.classList.add('open-display');
})

closeIcon.addEventListener("click", function(){
  display.classList.remove('open-display');
})





