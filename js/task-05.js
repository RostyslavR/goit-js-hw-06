const refInput = document.querySelector("#name-input");
const refOutput = document.querySelector("#name-output");

refInput.addEventListener("input", () => {
  refInput.value !== ""
    ? (refOutput.textContent = refInput.value)
    : (refOutput.textContent = "Anonymous");
});
