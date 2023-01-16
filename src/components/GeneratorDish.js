import { useState, useEffect } from "react";
import CardDish from "./CardDish";
import Button from "./Button";
import Header from "./Header";
import dishs from "../data/dish-data";

function GeneratorDish() {
  const [dishData, setDishData] = useState(dishs);
  const [currentDish, setCurretnDish] = useState(dishData.at(0));

  function randomDish() {
    setCurretnDish(dishData.at(Math.floor(Math.random() * dishData.length)));
  }

  useEffect(() => {
    randomDish();
  }, [dishData]);

  function chooseCategory(category) {
    let categoryDish = dishs.filter((value) => value.category === category);

    setDishData(categoryDish);

    randomDish();
  }

  return (
    <div>
      <Header setCategory={chooseCategory} />
      <CardDish dish={currentDish} />
      <Button randomDish={randomDish} />
    </div>
  );
}

export default GeneratorDish;
