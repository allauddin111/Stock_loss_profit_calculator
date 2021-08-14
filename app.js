
var initPrice,totStocks,finalValue,ret,finText,actualPrice,valChangePer;

function calculatestocks(){

	initPrice=document.StockDetails.initPrice.value;
	totStocks=document.StockDetails.totStocks.value;
	finalValue=document.StockDetails.finalValue.value;


	initPrice=parseFloat(initPrice);
	totStocks=parseFloat(totStocks);
	finalValue=parseFloat(finalValue);

	actualPrice=initPrice*totStocks;
	ret=finalValue-actualPrice;


	valChangePer=ret/actualPrice*100;

	if(finalValue>actualPrice)
		document.getElementById("myText").innerHTML = "YOU MADE PROFIT OF +" +ret +" AND PROFIT PERCENTAGE IS " +valChangePer +"%" ;
	else if(finalValue<actualPrice)
		document.getElementById("myText").innerHTML = "YOU MADE LOSS OF" +ret +" AND LOSS PERCENTAGE IS " +valChangePer +"%";
	else
		document.getElementById("myText").innerHTML = "YOU MADE NO PROFIT NO LOSS!!";
}