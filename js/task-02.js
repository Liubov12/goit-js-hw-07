const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const liRef = document.querySelector("ul#ingredients");
const items = ingredients.map(ingredient => {
    const newLiRef = document.createElement('li');
    newLiRef.textContent = ingredient;
    return newLiRef;
})
liRef.append(...items);