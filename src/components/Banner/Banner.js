import React from "react";
import ResetButton from "../ResetButton/ResetButton";

function Banner({ status, children, setAnswer, setGuessList }) {
  const className = `${status} banner`;
  return (
    <div className={className}>
      <p>{children}</p>
      <ResetButton setGuessList={setGuessList} setAnswer={setAnswer} />
    </div>
  );
}

export default Banner;
