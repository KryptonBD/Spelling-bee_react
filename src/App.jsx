import { useEffect, useState } from "react";
import { Guess } from "./components/Guess.jsx";
import { Header } from "./components/Header.jsx";
import { Honeycomb } from "./components/Honeycomb.jsx";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [guess, setGuess] = useState("");

  const addLetter = (letter) => {
    setGuess((prevGuess) => prevGuess + letter);
  };

  const removeLetter = () => {
    setGuess(guess.slice(0, -1));
  };

  const checkGuess = () => {
    if (data?.answers && data.answers.includes(guess)) {
      console.log("Yaay");
    } else {
      console.log("Not correct answer");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/data.json", {
        headers: { "Content-Type": "application/json" },
      });
      const json = await result.json();
      console.log(json);
      setData(json.data.today);
    };

    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <>
          <Header date={data.displayDate} editor={data.editor} />
          <section className="container">
            <div className="inputs">
              <div className="center">
                <Guess guess={guess} />
                <Honeycomb
                  centerLetter={data.centerLetter}
                  outerLetters={data.outerLetters}
                  addLetter={addLetter}
                  removeLetter={removeLetter}
                  checkGuess={checkGuess}
                />
              </div>
            </div>
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
