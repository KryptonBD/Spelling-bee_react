import { useEffect, useState } from "react";
import { Header } from "./components/Header.jsx";
import { Honeycomb } from "./components/Honeycomb.jsx";
import "./App.css";

function App() {
  const [data, setData] = useState();
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
                <Honeycomb
                  centerLetter={data.centerLetter}
                  outerLetters={data.outerLetters}
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
