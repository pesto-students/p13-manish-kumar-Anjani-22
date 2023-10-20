import React, { useState, useEffect } from "react";
import quotes from "../quotes";
import MusicGIF from "./MusicSymbol";
import QuoteHeading from "./QuoteHeading";
import Quote from "./Quote";
import Pause_Next_Buttons from "./Pause-Resume";

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(randomIndex);
  }, 7000);

  function addQuote() {
    quotes.push({ quote: inputValue });
  }
  return (
    <div>
      <MusicGIF src="./CodeSymbol.jpg" />
      <QuoteHeading />
      <MusicGIF src="./musicSymbol.png" />
      <Quote quote={quotes[quoteIndex]} />

      <input
        type="text"
        placeholder="Enter a new quote"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addQuote}>Add Quote</button>
      <Pause_Next_Buttons />
    </div>
  );
}

export default App;
