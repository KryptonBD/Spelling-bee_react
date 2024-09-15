import { useState } from "react";
import { Letter } from "./Letter";

export const Honeycomb = ({ centerLetter, outerLetters }) => {
  const [shuffledLetters, setShuffledLetters] = useState(outerLetters);

  const shuffle = () => {
    const shuffled = [...shuffledLetters].sort(() => Math.random() - 0.5);
    setShuffledLetters(shuffled);
  };

  return (
    <>
      <article className="honeycomb">
        <Letter letter={centerLetter} isCenter={true} />
        {shuffledLetters.map((letter, index) => (
          <Letter letter={letter} isCenter={false} key={index} />
        ))}
      </article>
      <section className="buttons">
        <button className="button" onClick={shuffle}>
          Shuffle
        </button>
      </section>
    </>
  );
};
