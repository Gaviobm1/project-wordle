import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ result }) {
  const className = result ? `cell ${result.status}` : "cell";
  return (
    <span className={className}>{result ? result.letter : undefined}</span>
  );
}

function Guess({ answer, guessWord }) {
  const result = checkGuess(guessWord, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell result={result ? result[num] : result} key={num} />
      ))}
    </p>
  );
}

export default Guess;
