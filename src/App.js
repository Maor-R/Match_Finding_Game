import React, { useState, useEffect } from "react";
import Main from "./components/Main.component";
import Card from "./components/Card.component";
import { animalArr } from "./data.js";
import { NUM_ANIMALS, GAME_OVER_MSG, LOSE, DRAW, WIN } from "./constants";
import { getRandomIndex, getRandomAnswer } from "./utils";

function App() {
  const [currentAnimalIndex, setCurrentAnimalIndex] = useState(0);
  const [randomIndex, setRandomIndex] = useState(getRandomIndex());
  const [sumCorrectAnswer, setSumCorrectAnswer] = useState(0);
  const [sumInCorrectAnswer, setSumInCorrectAnswer] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [randomAnswer, setRandomAnswer] = useState(getRandomAnswer());

  useEffect(() => {
    if (randomAnswer) {
      setRandomIndex(getRandomIndex());
    } else {
      setRandomIndex(currentAnimalIndex);
    }
    setRandomAnswer(getRandomAnswer());
  }, [currentAnimalIndex]);

  const nextImg = (answer) => {
    if (
      (answer && currentAnimalIndex === randomIndex) ||
      (!answer && currentAnimalIndex !== randomIndex)
    ) {
      setSumCorrectAnswer((prevSum) => prevSum + 1);
    } else {
      setSumInCorrectAnswer((prevSum) => prevSum + 1);
    }

    if (currentAnimalIndex < NUM_ANIMALS - 1) {
      setCurrentAnimalIndex((prevIndex) => prevIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  return (
    <div className="container">
      <Main
        sumCorrectAnswer={sumCorrectAnswer}
        sumInCorrectAnswer={sumInCorrectAnswer}
        nextImg={nextImg}
      ></Main>

      {!gameOver ? (
        <Card
          key={animalArr[currentAnimalIndex].id}
          id={animalArr[currentAnimalIndex].id}
          imgSrc={animalArr[currentAnimalIndex].imgSrc}
          answer={animalArr[randomIndex].description}
        ></Card>
      ) : sumCorrectAnswer === sumInCorrectAnswer ? (
        <h4 className="game-over">{GAME_OVER_MSG[DRAW]}</h4>
      ) : sumCorrectAnswer > sumInCorrectAnswer ? (
        <h4 className="game-over">{GAME_OVER_MSG[WIN]}</h4>
      ) : (
        <h4 className="game-over">{GAME_OVER_MSG[LOSE]}</h4>
      )}
    </div>
  );
}

export default App;
