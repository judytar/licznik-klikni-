let counter = 0;
const spanCounter = document.querySelector("span.counter");
const btnAdd = document.querySelector("button");
const btnSubtract = document.querySelector("button:nth-of-type(2)");
btnAdd.addEventListener("click", function () {
  counter++;
  spanCounter.textContent = counter;
});
btnSubtract.addEventListener("click", function () {
  counter--;
  spanCounter.textContent = counter;
});
