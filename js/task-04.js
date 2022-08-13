let counterValue = 0;
const refCounter = document.querySelector("#value");
const refDecrementBtn = document.querySelector('[data-action="decrement"]');
const refIncrementBtn = document.querySelector('[data-action="increment"]');

refDecrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  refCounter.textContent = counterValue;
});
refIncrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  refCounter.textContent = counterValue;
});

//**********************
// function updateCounter(counterValue) {
//   refCounter.textContent = counterValue;
// }
// function onClickDecrement() {
//   counterValue -= 1;
//   updateCounter(counterValue);
// }
// function onClickIncrement() {
//   counterValue += 1;
//   updateCounter(counterValue);
// }
// refDecrementBtn.addEventListener("click", onClickDecrement);
// refIncrementBtn.addEventListener("click", onClickIncrement);
//***********************
