import { NUM_ANIMALS } from "./constants/index";
import birdImg from "./assets/images/animals/bird.jpg";
import camelImg from "./assets/images/animals/camel.jpg";
import catImg from "./assets/images/animals/cat.jpg";
import dogImg from "./assets/images/animals/dog.jpg";
import fishImg from "./assets/images/animals/fish.jpg";
import foxImg from "./assets/images/animals/fox.jpg";
import horseImg from "./assets/images/animals/horse.jpg";
import leopardImg from "./assets/images/animals/leopard.jpg";
import monkeyImg from "./assets/images/animals/monkey.jpg";
import turtleImg from "./assets/images/animals/turtle.jpg";

const images = [
  birdImg,
  camelImg,
  catImg,
  dogImg,
  fishImg,
  foxImg,
  horseImg,
  leopardImg,
  monkeyImg,
  turtleImg,
];

let animalArr = [];

const addAnimal = (id, imgSrc, description) => {
  animalArr.push({ id: id, imgSrc: imgSrc, description: description });
};

for (let i = 0; i < NUM_ANIMALS; i++) {
  addAnimal(createId(i), images[i], getNameOfAnimal(images[i]));
}

function createId(index) {
  return index + 1;
}
function getNameOfAnimal(str) {
  return str.split("/")[3].split(".")[0];
}

export { animalArr };
