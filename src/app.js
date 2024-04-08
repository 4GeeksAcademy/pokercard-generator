/* eslint-disable */
import "bootstrap";
import "./style.css";

let soundFlip = new Audio("src/assets/sound/240776__f4ngy__card-flip.wav");

window.onload = function() {
  //write your code here
  let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let suit = ["♦", "♥", "♠", "♣"];

  let randomNumber = Math.floor(Math.random() * number.length);
  let randomSuit = Math.floor(Math.random() * suit.length);

  document.getElementById("suit").innerHTML = suit[randomSuit];
  document.getElementById("number").innerHTML = number[randomNumber];
  document.getElementById("reverse-suit").innerHTML = suit[randomSuit];

  if (suit[randomSuit] === "♥" || suit[randomSuit] === "♦") {
    document.getElementById("suit").classList.add("text-danger");
    document.getElementById("reverse-suit").classList.add("text-danger");
  }
  soundFlip.play();
};

let button = document.getElementById("randomButton");

button.onclick = function() {
  //write your code here
  let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let suit = ["♦", "♥", "♠", "♣"];

  let randomNumber = Math.floor(Math.random() * number.length);
  let randomSuit = Math.floor(Math.random() * suit.length);

  document.getElementById("suit").innerHTML = suit[randomSuit];
  document.getElementById("number").innerHTML = number[randomNumber];
  document.getElementById("reverse-suit").innerHTML = suit[randomSuit];

  if (suit[randomSuit] === "♥" || suit[randomSuit] === "♦") {
    document.getElementById("suit").classList.add("text-danger");
    document.getElementById("reverse-suit").classList.add("text-danger");
  }
  if (suit[randomSuit] === "♠" || suit[randomSuit] === "♣") {
    document.getElementById("suit").classList.remove("text-danger");
    document.getElementById("reverse-suit").classList.remove("text-danger");
  }
  soundFlip.play();
};
