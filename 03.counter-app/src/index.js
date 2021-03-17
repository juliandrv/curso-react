import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
// import PrimeraApp from "./PrimeraApp";
import "./index.css";


const divRoot = document.querySelector('#root');

console.log(divRoot);

// ReactDOM.render(<PrimeraApp saludo="Hola, soy Julián" />, divRoot);
ReactDOM.render(<CounterApp value={10} />, divRoot);
