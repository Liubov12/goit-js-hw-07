const items = document.querySelectorAll('li.item');
Array.prototype.forEach.call(items, (el)=> {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
});
categories.querySelectorAll('.item').forEach(item => {
    console.log(`Категория: ${item.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${item.querySelector('ul').children.length}`,
    );
  });