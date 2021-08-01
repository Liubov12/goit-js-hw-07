const itemsOfCategories = document.querySelectorAll('#categories');
console.log(`В списке ${itemsOfCategories.children.length} категории`);

itemsOfCategories .querySelectorAll('.item').forEach(item => {
    console.log(`Категория: ${item.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${item.querySelector('ul').children.length}.`
    );
  });