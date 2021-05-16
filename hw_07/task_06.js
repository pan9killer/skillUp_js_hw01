// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
//     <input
//     type="text"
//     id="validation-input"
//     data-length="6"
//     placeholder="Введи 6 символов"
//     />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
//     #validation-input {
//     border: 3px solid #bdbdbd;
//     }
//     #validation-input.valid {
//     border-color: #4caf50;
//     }
//     #validation-input.invalid {
//     border-color: #f44336;
//     }

let inputRef = document.querySelector('input#validation-input');
let dataLength = inputRef.dataset.length;


inputRef.addEventListener('blur', changingFunc);

function changingFunc() {
    if ((inputRef.value).length === 0) {
        inputRef.classList.remove('valid')
    }
    if ((inputRef.value).length > dataLength) {
        inputRef.className = 'invalid'
    }
    if ((inputRef.value).length >= 1 && (inputRef.value).length <= dataLength) {
        inputRef.className = 'valid'
    }
}
