const dice = document.querySelector(".dice");
const id = document.querySelector(".title");
const advice = document.querySelector(".quote");

function diceQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      id.innerHTML = `Advice #${res.slip.id}`;
      advice.innerHTML = `&#8220${res.slip.advice}&#8221`;
    });
}

dice.addEventListener("click", diceQuote);
