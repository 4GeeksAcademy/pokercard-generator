/* eslint-disable */
import "bootstrap";
import "./style.css";

let soundFlip = new Audio("src/assets/sound/240776__f4ngy__card-flip.wav");
let button = document.getElementById("randomButton");
let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let suit = ["♦", "♥", "♠", "♣"];

function generateCard() {
  let randomNumber = Math.floor(Math.random() * number.length);
  let randomSuit = Math.floor(Math.random() * suit.length);

  document.getElementById("suit").innerHTML = suit[randomSuit];
  document.getElementById("number").innerHTML = number[randomNumber];
  document.getElementById("reverse-suit").innerHTML = suit[randomSuit];

  if (suit[randomSuit] === "♥" || suit[randomSuit] === "♦") {
    document.getElementById("suit").classList.add("text-danger");
    document.getElementById("reverse-suit").classList.add("text-danger");
  } else {
    document.getElementById("suit").classList.remove("text-danger");
    document.getElementById("reverse-suit").classList.remove("text-danger");
  }
  soundFlip.play();
}

window.onload = generateCard();
button.addEventListener("click", generateCard);
