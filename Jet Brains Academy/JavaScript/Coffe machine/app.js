// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

var water = 400;
var milk = 540;
var coffe = 120;
var cups = 9;
var money = 550;
var run = true;

// console.log("The coffee machine has:");
// console.log(water + " ml of water");
// console.log(milk + " ml of milk");
// console.log(coffe + " g of coffee beans");
// console.log(cups + " disposable cups")
// console.log("$" + money + " of money");

function check(w, m, c) {
    if (water < w) {
        console.log("Sorry, not enough water");
        return false;
    }
    if (milk < m) {
        console.log("Sorry, not enough milk");
        return false;
    }
    if (coffe < c) {
        console.log("Sorry, not enough coffe beans!");
        return false;
    }
    return true
}

while(run){
    let option = input("Write action (buy,fill,take,remaining,exit): \n");
    if (option === "buy") {
        let optionCoffe = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
        switch (parseInt(optionCoffe)) {
            case 1:
                if (check(250, 0, 16)) {
                    console.log(optionCoffe)
                    console.log("I have enough resources, making you a coffee!");
                    water -= 250;
                    coffe -= 16;
                    money += 4;
                    cups -= 1;
                }
                break;
            case 2:
                if (check(350, 75, 20)) {
                    console.log("I have enough resources, making you a coffee!");
                    water -= 350;
                    milk -= 75;
                    coffe -= 20;
                    money += 7;
                    cups -= 1;
                }
                break;
            case 3:
                if (check(200, 100, 12)) {
                    water -= 200;
                    milk -= 100;
                    coffe -= 12;
                    money +=6;
                    cups -= 1;
                }
                break;
        }
    } else if (option === "fill") {
        let add = input("Write how many ml of water you want do add:");
        water += parseInt(add);
        add = input("Write how many ml of  milk you want to add:");
        milk += parseInt(add);
        add = input("Write how many g of coffe you want to add:");
        coffe += parseInt(add);
        add = input("Write how many disposable coffee cups you want to add:");
        cups += parseInt(add);
    } else if (option === "take") {
        console.log("I gave you $" + money);
        money = 0;
    } else if (option === "remaining"){
        console.log("The coffee machine has: \n"
            + water + " ml of water \n"
            + milk +" ml of milk \n"
            + coffe +" g of coffee beans \n"
            + cups +" disposable cups \n$"
            +money+" of money");
    }else if (option === "exit") {
        run = false;
    }
    console.log("\n");
}

// console.log("\n")
// console.log("The coffee machine has:");
// console.log(water + " ml of water");
// console.log(milk + " ml of milk");
// console.log(coffe + " g of coffe beans");
// console.log(cups + " disposable cups");
// console.log("$" + money + " money");
