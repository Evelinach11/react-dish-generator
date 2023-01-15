import { useState } from "react";
import dishs from "../data/dish-data";
import CardDish from "./CardDish";
import Button from "./Button";

function GeneratorDish() {
  const [currentDish, setCurretnDish] = useState(dishs.at(0));

  function randomDish() {
    setCurretnDish(dishs.at(Math.floor(Math.random() * dishs.length)));
  }

  return (
    <div>
      <CardDish dish={currentDish} />
      <Button randomDish={randomDish} />
    </div>
  );
}

export default GeneratorDish;
