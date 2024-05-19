import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "/src/constants.js";

function GuessInput({ guessList, setGuessList, guess, setGuess }) {
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          if (guessList.length > NUM_OF_GUESSES_ALLOWED) {
            return;
          }
          const finalGuess = guess;
          setGuessList([...guessList, finalGuess]);
          setGuess("");
        }}
      >
        <label htmlFor="enter-guess">Enter Guess: </label>
        <input
          required
          id="enter-guess"
          type="text"
          value={guess}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          maxLength="5"
          onChange={(e) => {
            const nextGuess = e.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
