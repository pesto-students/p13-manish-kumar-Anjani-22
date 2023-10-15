import React, { useState, useEffect } from "react";
import quotes from "../quotes";
import MusicGIF from "./MusicSymbol";
import QuoteHeading from "./QuoteHeading";

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random index for a new quote
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuoteIndex(randomIndex);
    }, 7000); // 7 seconds in milliseconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run this effect only once

  function addQuote
  {
    quotes.push({quote:inputValue});
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
        value={newQuote}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addQuote}>Add Quote</button>

    </div>
  );
}

export default App;
