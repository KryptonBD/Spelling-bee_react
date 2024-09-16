import { useState } from "react";
import { Letter } from "./Letter";

export const Honeycomb = ({
  centerLetter,
  outerLetters,
  addLetter,
  removeLetter,
  checkGuess,
}) => {
  const [shuffledLetters, setShuffledLetters] = useState(outerLetters);

  const shuffle = () => {
    const shuffled = [...shuffledLetters].sort(() => Math.random() - 0.5);
    setShuffledLetters(shuffled);
  };

  return (
    <>
      <article className="honeycomb">
        <Letter letter={centerLetter} isCenter={true} addLetter={addLetter} />
        {shuffledLetters.map((letter, index) => (
          <Letter
            letter={letter}
            isCenter={false}
            key={index}
            addLetter={addLetter}
          />
        ))}
      </article>
      <section className="buttons">
        <button className="button" onClick={removeLetter}>
          Delete
        </button>
        <button className="button" onClick={shuffle}>
          Shuffle
        </button>
        <button className="button" onClick={checkGuess}>
          Enter
        </button>
      </section>
    </>
  );
};
