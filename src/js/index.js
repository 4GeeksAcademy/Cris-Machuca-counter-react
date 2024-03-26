import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home";

const rootElement = document.getElementById('app');
let seconds = 0;

const interval = setInterval(() => {
  seconds++;
  renderApp();
}, 1000);

function renderApp() {
  ReactDOM.render(
    <Home seconds={seconds} />,
    rootElement
  );
}

renderApp();

