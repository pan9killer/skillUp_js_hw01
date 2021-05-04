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
// let liRef = document.createElement('li');
// let ul = document.querySelector('#ingredients');
// for (let i = 0; i < ingredients.length; i++){
//     let liRef = document.createElement('li');
//     liRef.textContent = ingredients[i];
//     ul.append(liRef)
// }
// console.log(ul);
// ul.append(ingredients)
const addLi = ingredients => ingredients.forEach(ingredient => {
    let ul = document.querySelector('ul#ingredients')
    let liRef = document.createElement('li')
    liRef.textContent= ingredient
    return    ul.append(liRef)
});
addLi(ingredients);
// addLi(ingredients)
// (addLi(ingredients))
// console.log(ingredients[0]);