import React from "react";
import ReactDOM from "react-dom";
import App from "./App";  // Import the default export from App.js
import "./styles.css";    // Import the CSS if necessary

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
