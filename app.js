#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 10000;
let pin = 1234;
let answer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your 4 digit pin",
    },
]);
if (answer.pin === pin) {
    console.log("Correct pin code!");
    console.log("Your current balance is:" + balance);
    let operation = await inquirer.prompt([
        {
            name: "Transaction",
            message: "Please select a transaction",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"],
        },
    ]);
    console.log(operation);
    if (operation.Transaction === "Withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "cash",
                type: "number",
                message: "Enter amount you want to withdraw:",
            },
        ]);
        if (amount.cash > balance) {
            console.log("Not enough cash to withdraw");
        }
        else {
            balance -= amount.cash;
            console.log("Your remaining balance is: " + balance);
        }
    }
    else if (operation.Transaction == "Check Balance") {
        console.log("Your current balance is:" + balance);
    }
    if (operation.Transaction === "Fast Cash") {
        let optionsAns = await inquirer.prompt([
            {
                name: "options",
                message: "Please select the withdrawal amount",
                type: "list",
                choices: [2000, 5000, 8000, 10000, 20000],
            },
        ]);
        if (optionsAns.options > balance) {
            console.log("Not enough cash to withdraw");
        }
        else {
            balance -= optionsAns.options;
            console.log(`Your remaining balance is ${balance}`);
        }
    }
}
else {
    console.log("Incorrect pin, Try again!");
}
