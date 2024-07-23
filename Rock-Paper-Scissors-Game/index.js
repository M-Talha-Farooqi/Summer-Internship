#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const choices = ["rock", "paper", "scissors"];

let userScore = 0;
let computerScore = 0;

const getComputerChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "draw";
  }
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    return "win";
  }
  return "lose";
};

const displayHeader = () => {
  console.log(chalk.blue.bold("\n=============================="));
  console.log(chalk.yellow.bold("  Rock, Paper, Scissors Game"));
  console.log(chalk.blue.bold("==============================\n"));
};

const displayScores = () => {
  console.log(chalk.cyan.bold(`\nCurrent Scores`));
  console.log(chalk.cyan(`You: ${userScore}, Computer: ${computerScore}\n`));
};

const playRound = async () => {
  displayHeader();

  const { userChoice } = await inquirer.prompt([
    {
      type: "list",
      name: "userChoice",
      message: "Choose rock, paper, or scissors:",
      choices,
    },
  ]);

  const computerChoice = getComputerChoice();
  console.log(chalk.blue(`\nComputer chose: ${computerChoice}`));

  const result = determineWinner(userChoice, computerChoice);

  if (result === "win") {
    userScore++;
    console.log(chalk.green("You win this round!"));
  } else if (result === "lose") {
    computerScore++;
    console.log(chalk.red("You lose this round."));
  } else {
    console.log(chalk.yellow("This round is a draw."));
  }

  displayScores();

  const { playAgain } = await inquirer.prompt([
    {
      type: "confirm",
      name: "playAgain",
      message: "Do you want to play again?",
    },
  ]);

  if (playAgain) {
    playRound();
  } else {
    console.log(chalk.magenta("\nFinal Scores:"));
    console.log(chalk.cyan(`You: ${userScore}, Computer: ${computerScore}`));
    console.log(chalk.green.bold("\nThanks for playing!"));
  }
};

// Start the game
playRound();
