const refCategoryList = document.querySelectorAll("#categories .item");
console.log("Number of categories: ", refCategoryList.length);
refCategoryList.forEach((category) => {
  console.log("");
  console.log("Category: ", category.querySelector("h2").textContent);
  console.log("Elements: ", category.querySelectorAll("li").length);
});
