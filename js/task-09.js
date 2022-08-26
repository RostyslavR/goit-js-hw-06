document.querySelector(".change-color").addEventListener("click", () => {
  const newColor = getRandomHexColor();
  changeBodyColor(newColor);
  changeTextSpan(newColor);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor(newColor) {
  document.body.style.backgroundColor = newColor;
}

function changeTextSpan(newColor) {
  document.querySelector(".color").textContent = "-" + newColor;
}
