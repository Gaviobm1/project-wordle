import React from "react";
import { TOPROW, MIDROW, BOTROW } from "../../data";

function Keyboard({ guess, setGuess, setGuessList, guessList }) {
  function makeRow(row) {
    return row.map((letter) => (
      <td
        className="key"
        key={letter}
        value={letter}
        onClick={() => {
          const nextGuess = {
            guess: guess + letter,
            id: Math.random(),
          };
          setGuess(guess + letter);
          setGuessList([...guessList, nextGuess]);
        }}
      >
        {letter}
      </td>
    ));
  }

  return (
    <table className="keyboard">
      <tbody>
        <tr>{makeRow(TOPROW)}</tr>
        <tr>{makeRow(MIDROW)}</tr>
        <tr>{makeRow(BOTROW)}</tr>
      </tbody>
    </table>
  );
}

export default Keyboard;
