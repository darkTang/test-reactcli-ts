import count from "./ts/count";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")!);
console.log(count(1, 2));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
