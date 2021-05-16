// Задание 2
// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// В JS есть массив строк.
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

let ul = document.querySelector('ul#ingredients')
let arrLi = [];
const addLi = ingredients => ingredients.forEach(ingredient => {
    let liRef = document.createElement('li')
    liRef.textContent= ingredient
    arrLi.push(liRef)
});


addLi(ingredients);
ul.append(...arrLi)