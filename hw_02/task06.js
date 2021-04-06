/* Задание 6
Напиши скрипт со следующим функционалом:
При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt. */
/* let input = prompt('Input number');
const numbers = [];
let total = 0;
for (let i = 0; input === 0; i += 1){
    input = +prompt('Input number');
    if(isNaN(input)){
        alert('Try to input some number');
    } else if(!isNaN(input)) {
        numbers.push(input)
    }
    return 
}

function TotalArr(arrElem){
    for(let arr of arrElem) {
        total += arr
    }
    return total
}
console.log(TotalArr(numbers)); */
/*for (i = 0; i <= numbers.length - 1; i += 1) {
    console.log(numbers[i]);
    total += numbers[i];
}
console.log(`Общая сумма чисел равна ${total}`);
console.log(typeOf.total); */
//======================================================
let input;
const numbers = [];
let total = 0;

while (true) {
    input = Number(prompt('Enter the number'));

    //    console.log(input);
    if (isNaN(input)) {
        alert('Try to input some number');
    }
    if (input === 0) {
        break;
    } else if (!isNaN(input)) {
        numbers.push(input);
    }
}

function SumArr(array) {
    for (let el of array) {
        total += el;
    }
    return total;
}

console.log(`Total count = ${SumArr(numbers)}`);
