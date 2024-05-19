import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "/src/constants.js";
import Guess from "../Guess/Guess";

function GuessList({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        const guessWord = guessList[num] || undefined;
        return (
          <Guess answer={answer} guessWord={guessWord} num={num} key={num} />
        );
      })}
    </div>
  );
}

export default GuessList;
