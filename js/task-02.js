const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const refParentEl = document.querySelector("ul#ingredients");
const liItemsArray = ingredients.map(c => {
    const newLiRef = document.createElement('li');
    newLiRef.textContent = c;
    return newLiRef;
})
refParentEl.append(...liItemsArray );