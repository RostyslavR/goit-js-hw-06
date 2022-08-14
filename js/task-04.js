let counterValue = 0;
const refCounter = document.querySelector("#value");
const refDecrementBtn = document.querySelector('[data-action="decrement"]');
const refIncrementBtn = document.querySelector('[data-action="increment"]');

refDecrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  refCounter.textContent = counterValue;
});
refIncrementBtn.addEventListener("click", () => {
  counterValue += 1;
  refCounter.textContent = counterValue;
});

//**********************
// function updateCounterValue(counterValue) {
//   refCounter.textContent = counterValue;
// }
// function onDecrementClick() {
//   counterValue -= 1;
//   updateCounterValue(counterValue);
// }
// function onIncrementClick() {
//   counterValue += 1;
//   updateCounterValue(counterValue);
// }
// refDecrementBtn.addEventListener("click", onDecrementClick);
// refIncrementBtn.addEventListener("click", onIncrementClick);
//***********************
