import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "/src/constants.js";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import Banner from "../Banner/Banner";

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guess, setGuess] = React.useState("");
  let gameOver = undefined;

  console.log(answer);

  const isGameOver = (guess, answer) => {
    const result = checkGuess(guess, answer);
    return result ? result.every(({ status }) => status === "correct") : null;
  };

  function checkForWinner() {
    const result = isGameOver(guessList[guessList.length - 1], answer);
    if (result) {
      gameOver = "win";
    } else if (!result && guessList.length >= NUM_OF_GUESSES_ALLOWED) {
      gameOver = "lose";
    }
  }

  checkForWinner();

  return (
    <>
      <GuessList
        guessList={guessList}
        checkForWinner={checkForWinner}
        answer={answer}
      />
      {gameOver === "win" ? (
        <Banner
          status="happy"
          setGuessList={setGuessList}
          setAnswer={setAnswer}
        >
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {guessList.length === 1 ? "1 guess" : `${guessList.length} guesses`}
          </strong>
        </Banner>
      ) : gameOver === "lose" ? (
        <Banner status="sad" setGuessList={setGuessList} setAnswer={setAnswer}>
          Sorry, the correct answer is <strong>{answer}</strong>
        </Banner>
      ) : (
        <GuessInput
          guessList={guessList}
          setGuessList={setGuessList}
          guess={guess}
          setGuess={setGuess}
        />
      )}
    </>
  );
}

export default Game;
