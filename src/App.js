import "./styles.css";
import { WORDS } from "./constants";
import WordContainer from "./components/WordContainer";
import { useState, useEffect } from "react";

import WordChangeHandler from "./components/WordChangeHandler";

export default function App() {
  const [chosenWord, setChosenWord] = useState("");

  useEffect(() => {
    const wordFromStorage = localStorage.getItem("chosenWord");
    const wordOrderFromStorage = localStorage.getItem("wordOrder");

    if (wordFromStorage) {
      setChosenWord(wordFromStorage);
    }
  }, []);
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  function wordChangeHandler() {
    setChosenWord((prev) => {
      const newValue = Math.floor(getRandomNumber(0, WORDS.length - 1));
      localStorage.setItem("chosenWord", newValue);
      return newValue;
    });
  }


  return (
    <>
      <div className="App">
        {chosenWord ? <WordContainer word={WORDS[chosenWord]} /> : ""}

        <WordChangeHandler chosenWord={chosenWord} fn={wordChangeHandler} />
      </div>
    </>
  );
}
