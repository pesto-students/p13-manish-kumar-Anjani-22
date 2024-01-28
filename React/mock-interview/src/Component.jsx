import { useContext } from "react";

import { AnimalContext } from "./AnimalProvider";

function Component() {
  const { animals, index } = useContext(AnimalContext);

  return <div>Component data: {animals[index]}</div>;
}

export default Component;
