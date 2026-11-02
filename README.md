# Rock Paper Scissors

[View the live demo](https://r0bby97.github.io/rock-paper-scissors/)

This project is a Rock Paper Scissors game created as part of
[The Odin Project Foundations course](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors),
later revisited and refactored to use the DOM as described in
[Revisiting Rock Paper Scissors](https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors#using-branches).
It practices JavaScript functions, conditionals, event listeners, DOM
manipulation, random computer choices, and score tracking.

## Assignment

Refactor the original console-based Rock Paper Scissors game so the whole
game is played in the browser instead of through `prompt()`, `alert()`, and
`console.log()`.

1. Add rock, paper, and scissors buttons to the HTML instead of using
   `prompt()` for user input.
2. Add an event listener to each button so clicking it plays a round with
   that choice against the computer.
3. Keep `getComputerChoice()` to randomly return `"rock"`, `"paper"`, or
   `"scissors"`.
4. Update `playRound()` to compare the human and computer choices, update the
   score, and render the round result to the page instead of logging it to
   the console.
5. Play rounds until either the human or the computer reaches a score of 5,
   then display the final winner (or a tie) and the final score on the page.
6. After the game ends, reset the scores and clear the results so a new game
   can be played.

## Pseudocode

```text
START

FUNCTION getComputerChoice
  STORE rock, paper, and scissors as the available choices
  GENERATE a random index from 0 to 2
  RETURN the choice at the generated index
END FUNCTION

FUNCTION playGame
  SELECT all rock/paper/scissors buttons

  FOR EACH button
    ADD a click listener that:
      GET the computer's choice
      GET the human's choice from the clicked button's text

      IF neither score has reached 5
        PLAY one round using both choices
      ELSE
        RESET the human and computer scores to 0
        CLEAR the results from the page
      END IF
  END FOR EACH
END FUNCTION

FUNCTION playRound with the human and computer choices
  IF the human choice beats the computer choice
    INCREASE the human score by 1
    DISPLAY that the human won the round
  ELSE IF the computer choice beats the human choice
    INCREASE the computer score by 1
    DISPLAY that the computer won the round
  ELSE
    DISPLAY a tie

  IF the human score or the computer score has reached 5
    CALL displayScore
  END IF
END FUNCTION

FUNCTION displayScore
  CLEAR the results from the page

  IF the human score is greater than the computer score
    DISPLAY the human as the winner
  ELSE IF the computer score is greater than the human score
    DISPLAY the computer as the winner
  ELSE
    DISPLAY a tie

  DISPLAY the final human and computer scores
END FUNCTION

CALL playGame

END
```
