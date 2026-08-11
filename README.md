# Rock Paper Scissors

This project is a console-based Rock Paper Scissors game created as part of
[The Odin Project Foundations course](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors).
It practices JavaScript functions, conditionals, loops, user input, random
computer choices, and score tracking.

## Assignment

Build a Rock Paper Scissors game that is played entirely in the browser
console.

1. Set up a blank HTML document and connect an external JavaScript file.
2. Create `getComputerChoice()` to randomly return `"rock"`, `"paper"`, or
   `"scissors"`.
3. Create `getHumanChoice()` to ask the player for a choice and return it in
   lowercase so the input is case-insensitive.
4. Create score variables for the human player and the computer.
5. Create `playRound()` to compare both choices, announce the result, and
   increase the winner's score.
6. Create `playGame()` to play five rounds, display the score after each
   round, and announce the final winner or a tie.

## Pseudocode

```text
START

FUNCTION getComputerChoice
  STORE rock, paper, and scissors as the available choices
  GENERATE a random index from 0 to 2
  RETURN the choice at the generated index
END FUNCTION

FUNCTION getHumanChoice
  ASK the player to choose rock, paper, or scissors
  CONVERT the input to lowercase

  IF the input is not rock, paper, or scissors
    DISPLAY an error message
    ASK the player for another choice
  END IF

  RETURN the player's choice
END FUNCTION

FUNCTION playGame
  SET the human score to 0
  SET the computer score to 0

  FUNCTION playRound with the human and computer choices
    IF both choices are the same
      ANNOUNCE a tie
    ELSE IF rock defeats scissors, paper defeats rock,
            or scissors defeats paper
      INCREASE the human score by 1
      ANNOUNCE that the human won the round
    ELSE
      INCREASE the computer score by 1
      ANNOUNCE that the computer won the round
    END IF
  END FUNCTION

  REPEAT 5 times
    GET a new human choice
    GET a new computer choice
    PLAY one round using both choices
    DISPLAY the current scores
  END REPEAT

  IF the human score is greater than the computer score
    ANNOUNCE the human as the winner
  ELSE IF the computer score is greater than the human score
    ANNOUNCE the computer as the winner
  ELSE
    ANNOUNCE a tie
  END IF
END FUNCTION

CALL playGame

END