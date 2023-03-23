// import WORLD from "./game/src/World/GlobalWorld"


// import "./public/style/style.scss"

// WORLD.createPlayer()
// WORLD.Start()


import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


