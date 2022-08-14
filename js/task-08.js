const refLoginForm = document.querySelector(".login-form");
refLoginForm.addEventListener("submit", onLoginFormSubmit);
function onLoginFormSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const email = elements.email.value;
  const password = elements.password.value;
  if (email !== "" && password !== "") {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    refLoginForm.reset();
    return;
  }
  alert("All fields must be filled!");
}

//********************* */
//   new FormData(event.currentTarget).forEach((value, key) => {
//     console.log(value);
//     console.log(key);
//   });
//********************* */
