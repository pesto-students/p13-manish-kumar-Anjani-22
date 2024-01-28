import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Component from "./Component";

import { AnimalProvider } from "./AnimalProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <AnimalProvider>
        <App />
        <Component />
      </AnimalProvider>
    </div>
  </React.StrictMode>
);

//Comment Section
