const refInput = document.querySelector("#font-size-control");
const refText = document.querySelector("#text");
refText.style.fontSize = refInput.value + "px";
refInput.addEventListener("input", () => {
  refText.style.fontSize = refInput.value + "px";
});
