const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const refIngredients = document.querySelector("#ingredients");

const makeIngredientList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const refLi = document.createElement("li");
    refLi.textContent = ingredient;
    refLi.classList.add("item");
    return refLi;
  });
};

refIngredients.append(...makeIngredientList(ingredients));
