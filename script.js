let score = 0;

const output = document.querySelector(".output");
let incrementElement = document.querySelector(".increase_btn");
let decrementElement = document.querySelector(".decrease_btn");
let resetElement = document.querySelector(".reset_btn");

output.innerText = score;

function increment() {
  score++;
  if (score > 0) {
    output.style.color = "#209920";
  }

  if (score === 0) {
    output.style.color = "#000";
  }
  output.textContent = score;
}

function decrement() {
  score--;
  if (score < 0) {
    output.style.color = "#c21e56";
  }
  if (score === 0) {
    output.style.color = "#000";
  }

  output.textContent = score;
}

function reset() {
  score = 0;

  if (score === 0) {
    output.style.color = "#000";
  }
  output.textContent = score;
}

incrementElement.addEventListener("click", increment);
decrementElement.addEventListener("click", decrement);
resetElement.addEventListener("click", reset);
