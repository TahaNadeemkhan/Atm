#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 10000;
let pin = 1234;

let answer = await inquirer.prompt(
    [{
        name: "pin",
        type: "number",
        message: "Enter your 4 digit pin"
    }]
)
if (answer.pin === pin) {
    console.log("Correct pin code!");
    console.log("Your current balance is:" + balance)
    let operation = await inquirer.prompt(
        [
            {
                name: "options",
                message: "Please select an option",
                type: "list",
                choices: ["Withdraw", "Check Balance"]
            }
        ]
        
    );
    console.log(operation);
    if (operation.options === "Withdraw") {
        let amount = await inquirer.prompt(
            [
                {
                    name: "cash",
                    type: "number",
                    message: "Enter amount you want to withdraw:"
                }
            ]
        );
        if (amount.cash > balance) {
            console.log("Not enough cash to withdraw");
        }
        else{
            balance -= amount.cash;
            console.log("Your remaining balance is: " + balance);
        }
    }
    else if (operation.options == "Check Balance") {
        console.log("Your current balance is:" + balance);
    }
}
else{
    console.log("Incorrect pin, Try again!");
}