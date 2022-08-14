const refBoxes = document.querySelector("#boxes");
const refNumber = document.querySelector("input");
const refCreateBtn = document.querySelector("[data-create]");
const refDestroyBtn = document.querySelector("[data-destroy]");
document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
  #boxes
  {
    display: flex;
    flex-wrap: 
    wrap;gap: 10px;
    align-items: baseline;
  }
  </style>`
);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const boxes = [];
  let box;
  for (let i = 0; i < amount; i += 1) {
    box = document.createElement("div");
    box.style.width = 30 + 10 * i + "px";
    box.style.height = box.style.width;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  return boxes;
}

function destroyBoxes() {
  refBoxes.innerHTML = "";
}

refCreateBtn.addEventListener("click", () => {
  destroyBoxes();
  refBoxes.append(...createBoxes(refNumber.value));
});

refDestroyBtn.addEventListener("click", destroyBoxes);
