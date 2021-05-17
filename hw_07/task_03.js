// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.
// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
{
    url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
},
{
    url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
},
{
    url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
},
];

let ulRef = document.querySelector('ul#gallery');

const imgArr = [];
const showImg = images => images.forEach(image => {
    let liRef = document.createElement('li');
    liRef.style.display = 'flex'
    liRef.style.padding = '25px'
    liRef.style.alignItems = 'center'
    liRef.style.flexDirection = 'column'
    
    
    liRef.insertAdjacentHTML('beforeend', `<img src="${image.url}" alt="${image.alt}" width="1260px" height="750px"></img>`)
    imgArr.push(liRef)
});
showImg(images);

ulRef.append(...imgArr)

