import "./style.css";

window.onload = function() {
  buttom();
  document.querySelector(".butt").addEventListener("click", buttom);
};

function buttom() {
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let icons = ["♦", "♥", "♠", "♣"];
  let randomValue = Math.floor(Math.random() * values.length);
  let randomIcons = Math.floor(Math.random() * icons.length);

  document.querySelector(".top-item").innerHTML = icons[randomIcons];
  document.querySelector(".top-number").innerHTML = values[randomValue];
  document.querySelector(".bottom-item").innerHTML = icons[randomIcons];
  document.querySelector(".bottom-number").innerHTML = values[randomValue];
  document.querySelector(".number").innerHTML = values[randomValue];
  document.querySelector(".container-card").style.color =
    randomIcons <= 1 ? "red" : "black";
}
