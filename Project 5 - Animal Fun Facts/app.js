import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "";
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const listAnimals = [];
for (const animal in animals) {
  listAnimals.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  const optionIndex = Math.floor(
    Math.random() * animals[e.target.alt].facts.length
  );
  document.getElementById("fact").innerHTML =
    animals[e.target.alt].facts[optionIndex];
}

const showBackground = true;

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for fun fact" : title}</h1>
    {showBackground && background}
    <div className="animals">{listAnimals}</div>
    <p id="fact"></p>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
