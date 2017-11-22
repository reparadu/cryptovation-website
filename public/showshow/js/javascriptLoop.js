const getCoinoneData = (suffix) => {
    return fetch(`https://api.coinone.co.kr/orderbook/?currency=${suffix}&format=json`);
}
const getKrakenData = (suffix) => {
    return fetch(`https://api.kraken.com/0/public/Depth?pair=${suffix}`);
}
window.setInterval( () => {
    Promise.all([getCoinoneData('eth'), getCoinoneData('xrp'), getCoinoneData('etc'), getKrakenData('XETHZUSD'), getKrakenData('XXRPZUSD'), getKrakenData('XETCZUSD')])
    .then((data) => {
        Promise.all([data[0].json(), data[1].json(), data[2].json(), data[3].json(), data[4].json(), data[5].json()])
        .then((data) => {

            // fund
            var fundAmountKK = 19000;
            var pointKK = 0;
            var fundAmountCO = 16000000;
            var pointCO = 0;

            // json
            var eth_CO = data[0];
            var xrp_CO = data[1];
            var etc_CO = data[2];

            var eth_KK = data[3];
            var xrp_KK = data[4];
            var etc_KK = data[5];

            // Price CO
            var buyETH_CO = eth_CO.ask[0].price;
            var sellETH_CO = eth_CO.bid[0].price;

            var buyXRP_CO = xrp_CO.ask[0].price;
            var sellXRP_CO = xrp_CO.bid[0].price;

            var buyETC_CO = etc_CO.ask[0].price;
            var sellETC_CO = etc_CO.bid[0].price;

            // Price KK
            var buyETH_KK = eth_KK.result.XETHZUSD.asks[0][0];
            var sellETH_KK = eth_KK.result.XETHZUSD.bids[0][0];

            var buyXRP_KK = xrp_KK.result.XXRPZUSD.asks[0][0];
            var sellXRP_KK = xrp_KK.result.XXRPZUSD.bids[0][0]

            var buyETC_KK = etc_KK.result.XETCZUSD.asks[0][0];
            var sellETC_KK = etc_KK.result.XETCZUSD.bids[0][0];


            // Show
            /*
            document.getElementById("KK-ETH_buychoice").innerHTML = buyETH_KK ;
            document.getElementById("KK-ETH_sellchoice").innerHTML = sellETH_KK ;

            document.getElementById("KK-XRP_buychoice").innerHTML = buyXRP_KK ;
            document.getElementById("KK-XRP_sellchoice").innerHTML = sellXRP_KK ;

            document.getElementById("KK-ETC_buychoice").innerHTML = buyETC_KK ;
            document.getElementById("KK-ETC_sellchoice").innerHTML = sellETC_KK ;

            document.getElementById("CO-ETH_buychoice").innerHTML = buyETH_CO ;
            document.getElementById("CO-ETH_sellchoice").innerHTML = sellETH_CO ;

            document.getElementById("CO-XRP_buychoice").innerHTML = buyXRP_CO ;
            document.getElementById("CO-XRP_sellchoice").innerHTML = sellXRP_CO ;

            document.getElementById("CO-ETC_buychoice").innerHTML = buyETC_CO ;
            document.getElementById("CO-ETC_sellchoice").innerHTML = sellETC_CO ;
            */

            // Loop
            /*
            1. fundAmountCo
            2. 1./buyETH_CO
            3. 2.*sellETH_KK
            4. 3./buyXRP_KK
            5. 4.*sellXRP_CO
            6. (5.-1.)
            7. (6./1.)*100
            */

            // Loop
            //1.Your Deposit
            /*document.getElementById("fund1").innerHTML = fundAmountCO;
            //2.buyETH BX
            document.getElementById("amountETH").innerHTML = fundAmountCO / buyETH_CO;
            document.getElementById("amountETH1").innerHTML = fundAmountCO / buyETH_CO;
            //3.sellETH PO
            document.getElementById("amountUSD").innerHTML = (fundAmountCO / buyETH_CO) * sellETH_KK;
            //4.buyXRP PO
            document.getElementById("amountXRP").innerHTML = ((fundAmountCO / buyETH_CO) * sellETH_KK) / buyXRP_KK;
            document.getElementById("amountXRP1").innerHTML = ((fundAmountCO / buyETH_CO) * sellETH_KK) / buyXRP_KK;
            //5.sellXRP_BX
            document.getElementById("amountTHB").innerHTML = (((fundAmountCO / buyETH_CO) * sellETH_KK) / buyXRP_KK) * sellXRP_CO;
            document.getElementById("amountTHB1").innerHTML = (((fundAmountCO / buyETH_CO) * sellETH_KK) / buyXRP_KK) * sellXRP_CO;
            //6.profit
            (document.getElementById("profit1").innerHTML = ((((fundAmountCO / buyETH_CO) * sellETH_KK) / buyXRP_KK) * sellXRP_CO) - fundAmountCO)*0.00089;
*/
            // ETH-XRP
            document.getElementById("CO-KK_ETH-XRP").innerHTML = 
            (((((((fundAmountCO / buyETH_CO) * sellETH_KK) / buyXRP_KK) * sellXRP_CO) - fundAmountCO) / fundAmountCO) * 100).toFixed(2) + " %";

           /* document.getElementById("CO-KK_XRP-ETH").innerHTML = 
            ((((((fundAmountCO / buyXRP_CO) * sellXRP_KK) / buyETH_KK) * sellETH_CO) - fundAmountCO) / fundAmountCO) * 100 + " %";
            
            document.getElementById("KK-CO_ETH-XRP").innerHTML = 
            ((((((fundAmountKK / buyETH_KK) * sellETH_CO) / buyXRP_CO) * sellXRP_KK) - fundAmountKK) / fundAmountKK) * 100 + " %";
            
            document.getElementById("KK-CO_XRP-ETH").innerHTML = 
            ((((((fundAmountKK / buyXRP_KK) * sellXRP_CO) / buyETH_CO) * sellETH_KK) - fundAmountKK) / fundAmountKK) * 100 + " %";


            //ETH-ETC
            document.getElementById("CO-KK_ETH-ETC").innerHTML = 
            ((((((fundAmountCO / buyETH_CO) * sellETH_KK) / buyETC_KK) * sellETC_CO) - fundAmountCO) / fundAmountCO) * 100 + " %";
            
            document.getElementById("CO-KK_ETC-ETH").innerHTML = 
            ((((((fundAmountCO / buyETC_CO) * sellETC_KK) / buyETH_KK) * sellETH_CO) - fundAmountCO) / fundAmountCO) * 100 + " %";
            
            document.getElementById("KK-CO_ETH-ETC").innerHTML = 
            ((((((fundAmountKK / buyETH_KK) * sellETH_CO) / buyETC_CO) * sellETC_KK) - fundAmountKK) / fundAmountKK) * 100 + " %";
            
            document.getElementById("KK-CO_ETC-ETH").innerHTML = 
            ((((((fundAmountKK / buyETC_KK) * sellETC_CO) / buyETH_CO) * sellETH_KK) - fundAmountKK) / fundAmountKK) * 100 + " %";



            // XRP-ETC
            document.getElementById("CO-KK_XRP-ETC").innerHTML = 
            ((((((fundAmountCO / buyXRP_CO) * sellXRP_KK) / buyETC_KK) * sellETC_CO) - fundAmountCO) / fundAmountCO) * 100 + " %";

            document.getElementById("CO-KK_ETC-XRP").innerHTML = 
            ((((((fundAmountCO / buyETC_CO) * sellETC_KK) / buyXRP_KK) * sellXRP_CO) - fundAmountCO) / fundAmountCO) * 100 + " %";
            
            document.getElementById("KK-CO_XRP-ETC").innerHTML = 
            ((((((fundAmountKK / buyXRP_KK) * sellXRP_CO) / buyETC_CO) * sellETC_KK) - fundAmountKK) / fundAmountKK) * 100 + " %";
            
            document.getElementById("KK-CO_ETC-XRP").innerHTML = 
            ((((((fundAmountKK / buyETC_KK) * sellETC_CO) / buyXRP_CO) * sellXRP_KK) - fundAmountKK) / fundAmountKK) * 100 + " %";


            //console.log(buyETH_KK);
            //console.log(buyETH_CO);

            */

            //console.log(eth.ask[0]);
            //console.log(XETHZUSD.result[XETHZUSD][ask][0]);
            //console.log(XXRPZUSD.[0]);
            //$("#CO-ETH_buychoice").(data["bid"][i]["price"] + " / " + "Vol : " +  data["bid"][i]["qty"]);
            //Put your logics here
            //You can access all variables in this scope
            });
        });
    } , 3000);