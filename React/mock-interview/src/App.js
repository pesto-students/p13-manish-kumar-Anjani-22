import { useContext } from "react";
import AnimalUI from "./AnimalUI";

import { AnimalContext } from "./AnimalProvider";

function App() {
  const { animals, index, setIndex } = useContext(AnimalContext);

  return (
    <div className="App">
      <AnimalUI index={index} setIndex={setIndex} animals={animals} />
    </div>
  );
}

export default App;
