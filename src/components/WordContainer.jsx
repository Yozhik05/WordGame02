import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import Ceil from "./Ceil";

export default function WordContainer({ word }) {
  const ArrayWord = Array.from(word);
  const [shufleWord, setShufleWord] = useState();

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  useEffect(() => {
    shuffleArray(ArrayWord);
  }, []);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {ArrayWord.map((char, index) => (
          <Ceil key={index} char={char} />
        ))}
      </Box>
    </>
  );
}
