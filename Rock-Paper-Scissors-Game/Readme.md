# Rock, Paper, Scissors Game

A simple Rock, Paper, Scissors game using inquirer.js for input and chalk for CLI aesthetics.

## Description

This is a command-line interface (CLI) implementation of the classic Rock, Paper, Scissors game. The user can play against the computer, and the game will keep track of scores. The game is built using Node.js, with the `inquirer` library for interactive prompts and the `chalk` library for styled terminal output.

## Installation

You can run this game directly using `npx` without needing to install it globally. Ensure you have Node.js installed on your system.

## Usage

To play the game, simply run the following command in your terminal:

<div style="background-color: #2d2d2d; padding: 20px; border-radius: 8px;">
  <pre style="color: white; font-size: 16px;">
    <code>
npx rps-game-by-mtf
    </code>
  </pre>
</div>

## How to Play

1. When prompted, choose one of the options: rock, paper, or scissors.
2. The computer will randomly choose one of the options.
3. The result of the round (win, lose, or draw) will be displayed along with the current scores.
4. You will be asked if you want to play another round. If you choose yes, the game will continue. If you choose no, the final scores will be displayed, and the game will end.

## Example

```bash
npx rps-game-by-mtf

==============================
  Rock, Paper, Scissors Game
==============================

? Choose rock, paper, or scissors: (Use arrow keys)
❯ rock
  paper
  scissors

Computer chose: scissors
You win this round!

Current Scores
You: 1, Computer: 0

? Do you want to play again? (Y/n)
