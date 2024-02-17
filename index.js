fetch("https://api.coinlore.net/api/ticker/?id=90")
.then((res) => {
  return res.json();
}).then((data) => {
  let btcCoin = "";
  data.map((btc) => {
    btcCoin = `<div class="home-card-item">
      <div class="name">
      <div class="home-coin-img-container">
      <img id="home-coin-img" src="images/btc-logo.png">
      <span>${btc.name}</span>
      </div>
      </div>
      <div class="price">
      <p>$${btc.price_usd}</p>
      </div>
      <div class="percent">
      <p class="${btc.percent_change_1h < 0.0 ? "percent1":"percent2"}">${btc.percent_change_1h}%
      </p>
      </div>
      <div class="percent p2">
      <p class="${btc.percent_change_24h < 0.0 ? "percent1":"percent2"}">${btc.percent_change_24h}%
      </p>
      </div>
      <div class="percent p3">
      <p class="${btc.percent_change_7d < 0.0 ? "percent1":"percent2"}">${btc.percent_change_7d}%
      </p>
      </div>
      <div class="market mc">
      <p>$${btc.market_cap_usd}</p>
      </div>
    </div>`
  })
  document.getElementById("btc").innerHTML = btcCoin;
}).catch((err) => console.log(err));


fetch("https://api.coinlore.net/api/ticker/?id=80")
.then((res) => {
  return res.json();
}).then((data) => {
  let ethCoin = "";
  data.map((eth) => {
    ethCoin = `<div class="home-card-item">
    <div class="name">
      <div class="home-coin-img-container">
      <img id="home-coin-img" src="images/eth-logo.png">
      <span>${eth.name}</span>
      </div>
      </div>
      <div class="price">
      <p>$${eth.price_usd}</p>
      </div>
      <div class="percent">
      <p class="${eth.percent_change_1h < 0.0 ? "percent1":"percent2"}">${eth.percent_change_1h}%
      </p>
      </div>
      <div class="percent p2">
      <p class="${eth.percent_change_24h < 0.0 ? "percent1":"percent2"}">${eth.percent_change_24h}%
      </p>
      </div>
      <div class="percent p3">
      <p class="${eth.percent_change_7d < 0.0 ? "percent1":"percent2"}">${eth.percent_change_7d}%
      </p>
      </div>
      <div class="market mc">
      <p>$${eth.market_cap_usd}</p>
      </div>
    </div>`
  })
  document.getElementById("eth").innerHTML = ethCoin
}).catch((err) => console.log(err));


fetch("https://api.coinlore.net/api/ticker/?id=518")
.then((res) => {
  return res.json();
}).then((data) => {
  let usdtCoin = "";
  data.map((usdt) => {
    usdtCoin = `<div class="home-card-item">
    <div class="name">
      <div class="home-coin-img-container">
      <img id="home-coin-img" src="images/usdt-logo.png">
      <span>${usdt.name}</span>
      </div>
      </div>
      <div class="price">
      <p>$${usdt.price_usd}</p>
      </div>
      <div class="percent">
      <p class="${usdt.percent_change_1h < 0.0 ? "percent1":"percent2"}">${usdt.percent_change_1h}%
      </p>
      </div>
      <div class="percent p2">
      <p class="${usdt.percent_change_24h < 0.0 ? "percent1":"percent2"}">${usdt.percent_change_24h}%
      </p>
      </div>
      <div class="percent p3">
      <p class="${usdt.percent_change_7d < 0.0 ? "percent1":"percent2"}">${usdt.percent_change_7d}%
      </p>
      </div>
      <div class="market mc">
      <p>$${usdt.market_cap_usd}</p>
      </div>
    </div>`
  })
  document.getElementById("usdt").innerHTML = usdtCoin
}).catch((err) => console.log(err));



fetch("https://api.coinlore.net/api/ticker/?id=2710")
.then((res) => {
  return res.json();
}).then((data) => {
  let bnbCoin = "";
  data.map((bnb) => {
    bnbCoin = `<div class="home-card-item">
    <div class="name">
      <div class="home-coin-img-container">
      <img id="home-coin-img" src="images/bnb-logo.png">
      <span>${bnb.name}</span>
      </div>
      </div>
      <div class="price">
      <p>$${bnb.price_usd}</p>
      </div>
      <div class="percent">
      <p class="${bnb.percent_change_1h < 0.0 ? "percent1":"percent2"}">${bnb.percent_change_1h}%
      </p>
      </div>
      <div class="percent p2">
      <p class="${bnb.percent_change_24h < 0.0 ? "percent1":"percent2"}">${bnb.percent_change_24h}%
      </p>
      </div>
      <div class="percent p3">
      <p class="${bnb.percent_change_7d < 0.0 ? "percent1":"percent2"}">${bnb.percent_change_7d}%
      </p>
      </div>
      <div class="market mc">
      <p>$${bnb.market_cap_usd}</p>
      </div>
    </div>`
  })
  document.getElementById("bnb").innerHTML = bnbCoin
}).catch((err) => console.log(err));


fetch("https://api.coinlore.net/api/ticker/?id=48543")
.then((res) => {
  return res.json();
}).then((data) => {
  let solCoin = "";
  data.map((sol) => {
    solCoin = `<div class="home-card-item">
      <div class="name">
      <div class="home-coin-img-container">
      <img id="home-coin-img" src="images/sol-logo.png">
      <span>${sol.name}</span>
      </div>
      </div>
      <div class="price">
      <p>$${sol.price_usd}</p>
      </div>
      <div class="percent">
      <p class="${sol.percent_change_1h < 0.0 ? "percent1":"percent2"}">${sol.percent_change_1h}%
      </p>
      </div>
      <div class="percent p2">
      <p class="${sol.percent_change_24h < 0.0 ? "percent1":"percent2"}">${sol.percent_change_24h}%
      </p>
      </div>
      <div class="percent p3">
      <p class="${sol.percent_change_7d < 0.0 ? "percent1":"percent2"}">${sol.percent_change_7d}%
      </p>
      </div>
      <div class="market mc">
      <p>$${sol.market_cap_usd}</p>
      </div>
    </div>`
  })
  document.getElementById("sol").innerHTML = solCoin
}).catch((err) => console.log(err));



