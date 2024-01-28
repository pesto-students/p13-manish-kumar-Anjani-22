// AnimalProvider.js

import React, { createContext, useState } from "react";

const AnimalContext = createContext();

function AnimalProvider({ children }) {
  const animals = ["Dog", "Cat", "Mouse"];
  const [index, setIndex] = useState(0);
  const obj = { animals, index, setIndex };

  return (
    <AnimalContext.Provider value={obj}>{children}</AnimalContext.Provider>
  );
}

export { AnimalContext, AnimalProvider };
