const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function convertCurrency(){
	const euroAmount = parseFloat(display.value);
	const exchangeRate = 1.1;
	if(!isNaN(euroAmount)){
		const dollarAmount = euroAmount * exchangeRate;
		display.value = dollarAmount.toFix(2);		
} else{
	display.value ="Error";
}
}

function convertTemperature(){
	const celsius = parseFloat(display.value);
	if(!isNaN(celsius)){
		const fahrenheit = (celsius * 9/5) + 32;
		display.value = fahrenheit.toFixed(2);
	} else {
		display.value = "Error";
	}
}
