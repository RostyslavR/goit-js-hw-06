const refInput = document.querySelector("#validation-input");
refInput.addEventListener("blur", () => {
  refInput.classList.remove("valid", "invalid");
  refInput.value.length === Number(refInput.dataset.length)
    ? refInput.classList.add("valid")
    : refInput.classList.add("invalid");
});
