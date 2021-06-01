const numberOfCategories = document.querySelectorAll('li.item');
console.log(`В списке:`, numberOfCategories.length, `категории.`);
const categoryName = document.querySelectorAll('ul#categories li.item h2');
for(let i = 0; i < categoryName.length; i += 1){
    console.log(`Категория:`,categoryName[i].textContent);
const countListOfCategories = document.querySelectorAll("ul#categories ul");
      console.log(`Кличество элементов:`,countListOfCategories[i].children.length);
 };