const categoriesListRef = document.getElementById("categories");
const categoriesItemRef = categoriesListRef.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItemRef.length}`);

categoriesItemRef.forEach(el => {
    const nameEl = el.querySelector('h2').textContent;
    const nameItemEl = el.querySelectorAll("li").length;


    console.log(`Category: ${nameEl}, Elements: ${nameItemEl}`);
})


