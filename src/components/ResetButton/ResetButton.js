import React from "react";
import { PlayCircle } from "react-feather";
import { sample } from "../../utils";
import { WORDS } from "../../data";

function ResetButton({ setGuessList, setAnswer }) {
  return (
    <button
      className="refresh-button"
      onClick={() => {
        setGuessList([]);
        setAnswer(() => sample(WORDS));
      }}
    >
      <PlayCircle className="refresh-svg" />
    </button>
  );
}

export default ResetButton;
