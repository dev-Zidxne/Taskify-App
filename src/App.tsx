import React from "react";
import logo from "./logo.svg";
import "./App.css";

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

type Person = {
  name: string;
  age?: number;
};

let person: Person = {
  name: "Zidane",
};

let lotsOfPeople: Person;

function App() {
  return <div className="App">Hello</div>;
}

export default App;
