

/*$(document).ready(function(){$("#profit_cddc_eth-xrp").text("3%" );});
$(document).ready(function(){$("#profit_cddc_xrp-eth").text("5%" );});
$(document).ready(function(){$("#profit_dccd_eth-xrp").text("7%" );});
$(document).ready(function(){$("#profit_dccd_xrp-eth").text("-2%" );});*/
// <<<<<<<<<<< --------------------- BX ------------------- >>>>>>>>>>>>> //

function retrieveData_BX_BTC(){
  $.getJSON("https://bx.in.th/api/orderbook/?pairing=1", function(data) {
    /*

    for (var i = 0; i < 5; i++) {
      $("#buyBX-BTC_" + i).text("Rate : " + data["bids"][i][0] + " / " + "Vol : " +  data["bids"][i][1]);
      $("#sellBX-BTC_" + i).text("Rate : " + data["asks"][i][0] + " / " + "Vol : " +  data["asks"][i][1]);
      }

    */

      //-- Vol Match --//
      var price=300000;
    var rate=0;
    while(true){
  var total = data["bids"][rate][0] * data["bids"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=300000;
    var rate=0;
    while(true){
  var total = data["asks"][rate][0] * data["asks"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#BX-BTC_buychoice").text("<i >Buy : <i>" + parseInt(data["asks"][rate][0]));
    $("#BX-BTC_sellchoice").text("Sell : " + parseInt(data["bids"][rate][0]));

  });
}

function retrieveData_BX_ETH(){
  $.getJSON("https://bx.in.th/api/orderbook/?pairing=21", function(data) {

    /*
    for (var i = 0; i < 5; i++) {
      $("#buyBX-ETH_" + i).text("Rate : " + data["bids"][i][0] + " / " + "Vol : " +  data["bids"][i][1]);
      $("#sellBX-ETH_" + i).text("Rate : " + data["asks"][i][0] + " / " + "Vol : " +  data["asks"][i][1]);
    }
    */

    //-- Vol Match --//
      var price=300000;
    var rate=0;
    while(true){
  var total = data["bids"][rate][0] * data["bids"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=300000;
    var rate=0;
    while(true){
  var total = data["asks"][rate][0] * data["asks"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#BX-ETH_buychoice").text("Buy : " + parseInt(data["asks"][rate][0]));
    $("#BX-ETH_sellchoice").text("Sell : " + parseInt(data["bids"][rate][0]));
  });
}

function retrieveData_BX_XRP(){
  $.getJSON("https://bx.in.th/api/orderbook/?pairing=25", function(data) {
    
    /*
    for (var i = 0; i < 5; i++) {
      $("#buyBX-XRP_" + i).text("Rate : " + data["bids"][i][0] + " / " + "Vol : " +  data["bids"][i][1]);
      $("#sellBX-XRP_" + i).text("Rate : " + data["asks"][i][0] + " / " + "Vol : " +  data["asks"][i][1]);
    }
  */

    //-- Vol Match --//
      var price=300000;
    var rate=0;
    while(true){
  var total = data["bids"][rate][0] * data["bids"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=300000;
    var rate=0;
    while(true){
  var total = data["asks"][rate][0] * data["asks"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#BX-XRP_buychoice").text("Buy : " + parseFloat(data["asks"][rate][0]));
    $("#BX-XRP_sellchoice").text("Sell : " + parseFloat(data["bids"][rate][0]));
  });
}

// <<<<<<<<<<< --------------------- CO ------------------- >>>>>>>>>>>>> //

function retrieveData_CO_BTC(){
  $.getJSON("https://api.coinone.co.kr/orderbook/?currency=btc", function(data) {
    
    /*
    for (var i = 0; i < 5; i++) {
      $("#buyCO-BTC_" + i).text("Rate : " + data["bid"][i]["price"] + " / " + "Vol : " +  data["bid"][i]["qty"]);
      $("#sellCO-BTC_" + i).text("Rate : " + data["ask"][i]["price"] + " / " + "Vol : " +  data["ask"][i]["qty"]);
    }
    */

    //-- Vol Match --//
      var price=22000000;
    var rate=0;
    while(true){
  var total = data["bid"][rate]["price"] * data["bid"][rate]["qty"];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=22000000;
    var rate=0;
    while(true){
  var total = data["ask"][rate]["price"] * data["ask"][rate]["qty"];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#CO-BTC_buychoice").text("Buy : " + data["ask"][rate]["price"]);
    $("#CO-BTC_sellchoice").text("Sell : " + data["bid"][rate]["price"]);

  });
}

function retrieveData_CO_ETH(){
  $.getJSON("https://api.coinone.co.kr/orderbook/?currency=eth", function(data) {
    
    /*
    for (var i = 0; i < 5; i++) {
      $("#buyCO-ETH_" + i).text("Rate : " + data["bid"][i]["price"] + " / " + "Vol : " +  data["bid"][i]["qty"]);
      $("#sellCO-ETH_" + i).text("Rate : " + data["ask"][i]["price"] + " / " + "Vol : " +  data["ask"][i]["qty"]);
    }
    */

    //-- Vol Match --//
      var price=22000000;
    var rate=0;
    while(true){
  var total = data["bid"][rate]["price"] * data["bid"][rate]["qty"];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=22000000;
    var rate=0;
    while(true){
  var total = data["ask"][rate]["price"] * data["ask"][rate]["qty"];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#CO-ETH_buychoice").text("Buy : " + parseInt(data["ask"][rate]["price"]));
    $("#CO-ETH_sellchoice").text("Sell : " + parseInt(data["bid"][rate]["price"]));
  });
}

function retrieveData_CO_XRP(){
  $.getJSON("https://api.coinone.co.kr/orderbook/?currency=xrp", function(data) {
    /*
    for (var i = 0; i < 5; i++) {
      $("#buyCO-XRP_" + i).text("Rate : " + data["bid"][i]["price"] + " / " + "Vol : " +  data["bid"][i]["qty"]);
      $("#sellCO-XRP_" + i).text("Rate : " + data["ask"][i]["price"] + " / " + "Vol : " +  data["ask"][i]["qty"]);
    }
    */

    //-- Vol Match --//
      var price=17000000;
    var rate=0;
    while(true){
  var total = data["bid"][rate]["price"] * data["bid"][rate]["qty"];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=17000000;
    var rate=0;
    while(true){
  var total = data["ask"][rate]["price"] * data["ask"][rate]["qty"];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#CO-XRP_buychoice").text("Buy : " + parseInt(data["ask"][rate]["price"]));
    $("#CO-XRP_sellchoice").text("Sell : " + parseInt(data["bid"][rate]["price"]));
  });
}

function retrieveData_CO_ETC(){
  $.getJSON("https://api.coinone.co.kr/orderbook/?currency=etc", function(data) {
    /*
    for (var i = 0; i < 5; i++) {
      $("#buyCO-ETC_" + i).text("Rate : " + data["bid"][i]["price"] + " / " + "Vol : " +  data["bid"][i]["qty"]);
      $("#sellCO-ETC_" + i).text("Rate : " + data["ask"][i]["price"] + " / " + "Vol : " +  data["ask"][i]["qty"]);
    }
    */

    //-- Vol Match --//
      var price=22000000;
    var rate=0;
    while(true){
  var total = data["bid"][rate]["price"] * data["bid"][rate]["qty"];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=22000000;
    var rate=0;
    while(true){
  var total = data["ask"][rate]["price"] * data["ask"][rate]["qty"];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#CO-ETC_buychoice").text("Buy : " + data["ask"][rate]["price"]);
    $("#CO-ETC_sellchoice").text("Sell : " + data["bid"][rate]["price"]);
  });
}

// <<<<<<<<<<< --------------------- KK ------------------- >>>>>>>>>>>>> //

function retrieveData_KK_BTC(){
  $.getJSON("https://api.kraken.com/0/public/Depth?pair=XXBTZUSD", function(data) {
    /*
    for (var i = 0; i < 5; i++) {
      $("#buyKK-BTC_" + i).text("Rate : " + data["result"]["XXBTZUSD"]["bids"][i][0] + " / " + "Vol : " +  data["result"]["XXBTZUSD"]["bids"][i][1]);
      $("#sellKK-BTC_" + i).text("Rate : " + data["result"]["XXBTZUSD"]["asks"][i][0] + " / " + "Vol : " +  data["result"]["XXBTZUSD"]["asks"][i][1]);
    }
    */

    //-- Vol Match --//
      var price=19000;
    var rate=0;
    while(true){
  var total = data["result"]["XXBTZUSD"]["bids"][rate][0] * data["result"]["XXBTZUSD"]["bids"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=19000;
    var rate=0;
    while(true){
  var total = data["result"]["XXBTZUSD"]["asks"][rate][0] * data["result"]["XXBTZUSD"]["asks"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#KK-BTC_buychoice").text("Buy : " + data["result"]["XXBTZUSD"]["asks"][rate][0]);
    $("#KK-BTC_sellchoice").text("Sell : " + data["result"]["XXBTZUSD"]["bids"][rate][0]);
  });
}

function retrieveData_KK_ETH(){
  $.getJSON("https://api.kraken.com/0/public/Depth?pair=XETHZUSD", function(data) {
    /*
    for (var i = 0; i < 5; i++) {
      $("#buyKK-ETH_" + i).text("Rate : " + data["result"]["XETHZUSD"]["bids"][i][0] + " / " + "Vol : " +  data["result"]["XETHZUSD"]["bids"][i][1]);
      $("#sellKK-ETH_" + i).text("Rate : " + data["result"]["XETHZUSD"]["asks"][i][0] + " / " + "Vol : " +  data["result"]["XETHZUSD"]["asks"][i][1]);
    }
    */
    //-- Vol Match --//
      var price=19000;
    var rate=0;
    while(true){
  var total = data["result"]["XETHZUSD"]["bids"][rate][0] * data["result"]["XETHZUSD"]["bids"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=19000;
    var rate=0;
    while(true){
  var total = data["result"]["XETHZUSD"]["asks"][rate][0] * data["result"]["XETHZUSD"]["asks"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#KK-ETH_buychoice").text("Buy : " + parseFloat(data["result"]["XETHZUSD"]["asks"][rate][0]));
    $("#KK-ETH_sellchoice").text("Sell : " + data["result"]["XETHZUSD"]["bids"][rate][0]);
  });
}

function retrieveData_KK_XRP(){
  $.getJSON("https://api.kraken.com/0/public/Depth?pair=XXRPZUSD", function(data) {
    /*
    for (var i = 0; i < 5; i++) {
      $("#buyKK-XRP_" + i).text("Rate : " + data["result"]["XXRPZUSD"]["bids"][i][0] + " / " + "Vol : " +  data["result"]["XXRPZUSD"]["bids"][i][1]);
      $("#sellKK-XRP_" + i).text("Rate : " + data["result"]["XXRPZUSD"]["asks"][i][0] + " / " + "Vol : " +  data["result"]["XXRPZUSD"]["asks"][i][1]);
    }
    */

    //-- Vol Match --//
      var price=19000;
    var rate=0;
    while(true){
  var total = data["result"]["XXRPZUSD"]["bids"][rate][0] * data["result"]["XXRPZUSD"]["bids"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=19000;
    var rate=0;
    while(true){
  var total = data["result"]["XXRPZUSD"]["asks"][rate][0] * data["result"]["XXRPZUSD"]["asks"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#KK-XRP_buychoice").text("Buy : " + data["result"]["XXRPZUSD"]["asks"][rate][0]);
    $("#KK-XRP_sellchoice").text("Sell : " + data["result"]["XXRPZUSD"]["bids"][rate][0]);  
  });
}

function retrieveData_KK_ETC(){
  $.getJSON("https://api.kraken.com/0/public/Depth?pair=XETCZUSD", function(data) {
    /*
    for (var i = 0; i < 5; i++) {
      $("#buyKK-ETC_" + i).text("Rate : " + data["result"]["XETCZUSD"]["bids"][i][0] + " / " + "Vol : " +  data["result"]["XETCZUSD"]["bids"][i][1]);
      $("#sellKK-ETC_" + i).text("Rate : " + data["result"]["XETCZUSD"]["asks"][i][0] + " / " + "Vol : " +  data["result"]["XETCZUSD"]["asks"][i][1]);
    }
    */

    //-- Vol Match --//
      var price=19000;
    var rate=0;
    while(true){
  var total = data["result"]["XETCZUSD"]["bids"][rate][0] * data["result"]["XETCZUSD"]["bids"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=19000;
    var rate=0;
    while(true){
  var total = data["result"]["XETCZUSD"]["asks"][rate][0] * data["result"]["XETCZUSD"]["asks"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#KK-ETC_buychoice").text("Buy : " + data["result"]["XETCZUSD"]["asks"][rate][0]);
    $("#KK-ETC_sellchoice").text("Sell : " + data["result"]["XETCZUSD"]["bids"][rate][0]);  
  });
}

function retrieveData_KK_LTC(){
  $.getJSON("https://api.kraken.com/0/public/Depth?pair=XLTCZUSD", function(data) {
    /*
    for (var i = 0; i < 5; i++) {
      $("#buyKK-LTC_" + i).text("Rate : " + data["result"]["XLTCZUSD"]["bids"][i][0] + " / " + "Vol : " +  data["result"]["XLTCZUSD"]["bids"][i][1]);
      $("#sellKK-LTC_" + i).text("Rate : " + data["result"]["XLTCZUSD"]["asks"][i][0] + " / " + "Vol : " +  data["result"]["XLTCZUSD"]["asks"][i][1]);
    }
    */

    //-- Vol Match --//
      var price=19000;
    var rate=0;
    while(true){
  var total = data["result"]["XLTCZUSD"]["bids"][rate][0] * data["result"]["XLTCZUSD"]["bids"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=19000;
    var rate=0;
    while(true){
  var total = data["result"]["XLTCZUSD"]["asks"][rate][0] * data["result"]["XLTCZUSD"]["asks"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#KK-LTC_buychoice").text("Buy : " + data["result"]["XLTCZUSD"]["asks"][rate][0]);
    $("#KK-LTC_sellchoice").text("Sell : " + data["result"]["XLTCZUSD"]["bids"][rate][0]);
  });
}
// <<<<<<<<<<< --------------------- PO ------------------- >>>>>>>>>>>>> //

function retrieveData_PO_BTC(){
  $.getJSON("https://poloniex.com/public?command=returnOrderBook&currencyPair=USDT_BTC&depth=30", function(data) {
    /*
    for (var i = 0; i < 5; i++) {
      $("#buyPO-BTC_" + i).text("Rate : " + data["bids"][i][0] + " / " + "Vol : " +  data["bids"][i][1]);
      $("#sellPO-BTC_" + i).text("Rate : " + data["asks"][i][0] + " / " + "Vol : " +  data["asks"][i][1]);
    }
    */

    //-- Vol Match --//
      var price=19000;
    var rate=0;
    while(true){
  var total = data["bids"][rate][0] * data["bids"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=19000;
    var rate=0;
    while(true){
  var total = data["asks"][rate][0] * data["asks"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#PO-BTC_buychoice").text("Buy : " + data["asks"][rate][0]);
    $("#PO-BTC_sellchoice").text("Sell : " + data["bids"][rate][0]);
  });
}

function retrieveData_PO_ETH(){
  $.getJSON("https://poloniex.com/public?command=returnOrderBook&currencyPair=USDT_ETH&depth=30", function(data) {
    /*
    for (var i = 0; i < 5; i++) {
      $("#buyPO-ETH_" + i).text("Rate : " + data["bids"][i][0] + " / " + "Vol : " +  data["bids"][i][1]);
      $("#sellPO-ETH_" + i).text("Rate : " + data["asks"][i][0] + " / " + "Vol : " +  data["asks"][i][1]);
    }
    */

    //-- Vol Match --//
      var price=19000;
    var rate=0;
    while(true){
  var total = data["bids"][rate][0] * data["bids"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=19000;
    var rate=0;
    while(true){
  var total = data["asks"][rate][0] * data["asks"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#PO-ETH_buychoice").text("Buy : " + data["asks"][rate][0]);
    $("#PO-ETH_sellchoice").text("Sell : " + data["bids"][rate][0]);
  });
}

function retrieveData_PO_XRP(){
  $.getJSON("https://poloniex.com/public?command=returnOrderBook&currencyPair=USDT_XRP&depth=50", function(data) {
    /*
    for (var i = 0; i < 5; i++) {
      $("#buyPO-XRP_" + i).text("Rate : " + data["bids"][i][0] + " / " + "Vol : " +  data["bids"][i][1]);
      $("#sellPO-XRP_" + i).text("Rate : " + data["asks"][i][0] + " / " + "Vol : " +  data["asks"][i][1]);
    }
    */
    
    //-- Vol Match --//
      var price=19000;
    var rate=0;
    while(true){
  var total = data["bids"][rate][0] * data["bids"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=19000;
    var rate=0;
    while(true){
  var total = data["asks"][rate][0] * data["asks"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#PO-XRP_buychoice").text("Buy : " + data["asks"][rate][0]);
    $("#PO-XRP_sellchoice").text("Sell : " + data["bids"][rate][0]);
  });
}


function retrieveData_PO_ETC(){
  $.getJSON("https://poloniex.com/public?command=returnOrderBook&currencyPair=USDT_ETC&depth=50", function(data) {
    /*
    for (var i = 0; i < 5; i++) {
      $("#buyPO-ETC_" + i).text("Rate : " + data["bids"][i][0] + " / " + "Vol : " +  data["bids"][i][1]);
      $("#sellPO-ETC_" + i).text("Rate : " + data["asks"][i][0] + " / " + "Vol : " +  data["asks"][i][1]);
    }
    */
    
    //-- Vol Match --//
      var price=19000;
    var rate=0;
    while(true){
  var total = data["bids"][rate][0] * data["bids"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=19000;
    var rate=0;
    while(true){
  var total = data["asks"][rate][0] * data["asks"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#PO-ETC_buychoice").text("Buy : " + data["asks"][rate][0]);
    $("#PO-ETC_sellchoice").text("Sell : " + data["bids"][rate][0]);
  });
}

function retrieveData_PO_LTC(){
  $.getJSON("https://poloniex.com/public?command=returnOrderBook&currencyPair=USDT_LTC&depth=50", function(data) {
    /*
    for (var i = 0; i < 5; i++) {
      $("#buyPO-LTC_" + i).text("Rate : " + data["bids"][i][0] + " / " + "Vol : " +  data["bids"][i][1]);
      $("#sellPO-LTC_" + i).text("Rate : " + data["asks"][i][0] + " / " + "Vol : " +  data["asks"][i][1]);
    }
    */
    
    //-- Vol Match --//
      var price=19000;
    var rate=0;
    while(true){
  var total = data["bids"][rate][0] * data["bids"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }

    var price=19000;
    var rate=0;
    while(true){
  var total = data["asks"][rate][0] * data["asks"][rate][1];
  if(price > total) price = price - total;
  else break;
  rate++;
    }
    $("#PO-LTC_buychoice").text("Buy : " + data["asks"][rate][0]);
    $("#PO-LTC_sellchoice").text("Sell : " + data["bids"][rate][0]);
  });
}



//------------- LOOP ----------//
/*function calculate(){
  var test = $('#BX-BTC_choice').text();
  console.log(test);
}*/

// <<<<<<<<<<< --------------- Initiates Data ------------- >>>>>>>>>>>>> //

retrieveData_BX_BTC();
retrieveData_BX_ETH();
retrieveData_BX_XRP();
retrieveData_CO_BTC();
retrieveData_CO_ETH();
retrieveData_CO_XRP();
retrieveData_CO_ETC();
retrieveData_KK_BTC();
retrieveData_KK_ETH();
retrieveData_KK_XRP();
retrieveData_KK_ETC();
retrieveData_KK_LTC();
retrieveData_PO_BTC();
retrieveData_PO_ETH();
retrieveData_PO_XRP();
retrieveData_PO_ETC();
retrieveData_PO_LTC();
//calculate();

// <<<<<<<<<<< ------------------ Interval ---------------- >>>>>>>>>>>>> //

$(document).ready(
  function() {
    setInterval(retrieveData_BX_BTC, 3000);
    setInterval(retrieveData_BX_ETH, 3000);
    setInterval(retrieveData_BX_XRP, 3000);
    setInterval(retrieveData_CO_BTC, 3000);
    setInterval(retrieveData_CO_ETH, 3000);
    setInterval(retrieveData_CO_XRP, 3000);
    setInterval(retrieveData_CO_ETC, 3000);
    setInterval(retrieveData_KK_BTC, 3000);
    setInterval(retrieveData_KK_ETH, 3000);
    setInterval(retrieveData_KK_XRP, 3000);
    setInterval(retrieveData_KK_ETC, 3000);
    setInterval(retrieveData_KK_LTC, 3000);
    setInterval(retrieveData_PO_BTC, 3000);
    setInterval(retrieveData_PO_ETH, 3000);
    setInterval(retrieveData_PO_XRP, 3000);
    setInterval(retrieveData_PO_ETC, 3000);
    setInterval(retrieveData_PO_LTC, 3000);
    //setInterval(calculate, 3000);
    // 1 sec = 1000 millisecs
  }
);

// <<<<<<<<<<< -------------------- Test ------------------ >>>>>>>>>>>>> //

/*
function retrieveData() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 5; k++) {
        (function (i,j,k) {          
          var apiURL = [
            "https://bx.in.th/api/orderbook/?pairing=",
            "https://api.coinone.co.kr/orderbook/?currency=",
            "https://api.kraken.com/0/public/Depth?pair="
          ];
          var urlParam = [
            ["1", "21", "25"],
            ["btc", "eth", "xrp"],
            ["XXBTZUSD", "XETHZUSD", "XXRPZUSD"]
          ];
          $.getJSON(apiURL[i]+urlParam[i][j], function(data) {
            var market = ["BX", "CO", "KR"];
            var currency = ["BTC", "ETH", "XRP"];
            var divBuyID = "buyRate" + market[i] + "-" + currency[j] + "_" + k.toString();
            var divSellID = "sellRate" + market[i] + "-" + currency[j] + "_" + k.toString();
            var buyRateData;
            var buyVolData;
            var sellRateData;
            var sellVolData;
            console.log(divBuyID);
            switch (i) {
              case 0:
                console.log(data["bids"][k][0]);
                buyRateData = data["bids"][k][0];
                buyVolData = data["bids"][k][1];
                sellRateData = data["asks"][k][0];
                sellVolData = data["asks"][k][1];
                console.log("INSIDE : " + buyRateData);
                break;
              case 1:
                buyRateData = data["bid"][k]["price"];
                buyVolData = data["bid"][k]["qty"];
                sellRateData = data["ask"][k]["price"];
                sellVolData = data["ask"][k]["qty"];
                break;
              case 2:
                buyRateData = data["result"][urlParam[i][j]]["bids"][k][0];
                buyVolData = data["result"][urlParam[i][j]]["bids"][k][1];
                sellRateData = data["result"][urlParam[i][j]]["asks"][k][0];
                sellVolData = data["result"][urlParam[i][j]]["asks"][k][1];
                break;
            }
            console.log("OUTSIDE : " + buyRateData);
            console.log(data["bids"][k][0]);
            $("#" + divBuyID).text("Rate : " + buyRateData + " / " + "Vol : " + buyVolData);
            $("#" + divSellID).text("Rate : " + sellRateData + " / " + "Vol : " + sellVolData);
          }); // end getJSON
        })(i,j,k);
      } // end loop for k
    } // end loop for j
  } // end loop for i
}

retrieveData();
// $(document).ready(
//   function() {
//     $("#sellRateBX_BTC_4").text("test");
//   }
// );

/*
$(document).ready(
  function() {
    setInterval(retrieveData, 60000); // 1 sec = 1000 millisecs
  }
);
*/