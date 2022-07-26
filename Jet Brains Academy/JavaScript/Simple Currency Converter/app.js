let input = require('sync-input');

console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");


console.log("What do you want to do?");
console.log("1-Convert currencies 2-Exit program");

let amount;
var devide = 0;
var multiply = 0;
let toCurrency;
let fromCurrency;
let run = true;
let choicce;

function check(curr, typ) {

    const temp = function (num) {
        if (typ == "from") {
            devide = num;
        } else if (typ == "to") {
            multiply = num;
        }
    }


    if (typeof (curr) === 'string') {

        switch (curr) {
            case "USD":
                temp(1);
                break;
            case "JPY":
                temp(113.5);
                break;
            case "EUR":
                temp(0.89);
                break;
            case "RUB":
                temp(74.36);
                break;
            case "GBP":
                temp(0.75);
                break;
        }
    }

    return true
};

choice = input();

while(run){
    if(choice==1){
        console.log("What do you want to convert?");
        fromCurrency = input("From: ").toUpperCase();
        if (fromCurrency != 'USD' && fromCurrency != 'JPY' && fromCurrency != 'EUR' && fromCurrency != 'RUB' && fromCurrency != 'GBP') {
            console.log("Unknown currency.")
        }
        toCurrency = input("To: ").toUpperCase();
        if (toCurrency != 'USD' && toCurrency != 'JPY' && toCurrency != 'EUR' && toCurrency != 'RUB' && toCurrency != 'GBP') {
            console.log("Unknown currency.")
        }
        amount = parseInt(input("Amount: "));
        if (check(fromCurrency, "from") && check(toCurrency, "to")) {
            if (isNaN(amount)) {
                console.log(`The amount has to be a number`)
            } else if (amount < 1) {
                console.log("The amount cannot be less than 1");
            } else if (typeof (amount) == 'number') {
                let tmp = ((amount / devide) * multiply).toFixed(4)
                console.log(`Result: ${amount} ${fromCurrency} equals ${tmp} ${toCurrency}`)
            } else {
                console.log("The amount has to be a number")
            }
        }
    } else if(choice == 2){
        console.log("Have a nice day!")
        run = false;
    } else {
        console.log("Unknown input")
        choice = 1;
    }
}


