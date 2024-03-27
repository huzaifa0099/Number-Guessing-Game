#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random () *6 + 1) ;

const answer = await inquirer.prompt([
    {
        message: "please guess a number between 1-6 :",
        type: "number",
        name: "userGuessedNumber",
    }
]);

if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk.green("Congratulations! You Guessed a right number."));
        
} else {
    console.log(chalk.red("You Guessed a wrong number!"));
    
}