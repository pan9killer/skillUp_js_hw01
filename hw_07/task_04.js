// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
//  <div id="counter">
//     <button type="button" data-action="decrement">-1</button>
//     <span id="value">0</span>
//     <button type="button" data-action="increment">+1</button>
// </div> 

let counterValue = document.querySelector('span#value');
let increment = document.querySelector('[data-action="increment"]');
let decrement = document.querySelector('[data-action="decrement"]');

increment.addEventListener('click', () => {
    let numValue = Number(counterValue.innerText);
    let numIncrement = Number(increment.innerText);
    numValue += numIncrement;
    return counterValue.innerText = numValue;
});

decrement.addEventListener('click', () => {
    let numValue = Number(counterValue.innerText);
    let numDecrement = Number(decrement.innerText);
    numValue += numDecrement;
    return counterValue.innerText = numValue;
});
