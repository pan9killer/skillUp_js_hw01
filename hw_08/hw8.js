// Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне.
// Разбей задание на несколько подзадач:
// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
// Пример работы https://gitspawn.github.io/js_gallery-/
// Стартовые файлы
// В  src.zip ты найдешь стартовые файлы проекта с базовой разметкой и готовыми стилями.
// В файле gallery-items.js есть массив объектов содержащих информацию о изображениях: маленькое изображение, оригинальное и описание.
// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, и указываться в href ссылки (это необходимо для доступности).
//     <li class="gallery__item">
//     <a
//         class="gallery__link"
//         href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//     >
//         <img
//         class="gallery__image"
//         src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//         data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//         alt="Tulips"
//         />
//     </a>
// </li>
// Дополнительно
// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.
// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
import defaultExport from "./gallery-items.js";
let images = defaultExport;
let ulRef = document.querySelector('ul.gallery.js-gallery');
let closeRef = document.querySelector('button.lightbox__button');
let changeImg = document.querySelector('img.lightbox__image');
let isOpen = document.querySelector('div.lightbox.js-lightbox');
let isOverlay = document.querySelector('div.lightbox__overlay');


let imgArr = [];
const showImg = imagesSrc => imagesSrc.forEach(image => {
    let liRef = document.createElement('li');
    liRef.className = 'gallery__item'
    liRef.insertAdjacentHTML('beforeend', `<a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"></img></a>`)
    imgArr.push(liRef)
});
showImg(images);
ulRef.append(...imgArr);

ulRef.addEventListener('click', onGalleryClick);
closeRef.addEventListener('click', closeGallery);
isOverlay.addEventListener('click', closeGallery);


function onGalleryClick(event) {
    event.preventDefault();
    if ('IMG' !== event.target.nodeName) {
        return
    }
    let dataImg = event.target;
    let dataBigImage = dataImg.dataset.source;
    let dataBigAlt = dataImg.alt;
    changeImg.src = dataBigImage
    changeImg.alt = dataBigAlt
    isOpen.classList.add("is-open");
}

function closeGallery() {
    isOpen.classList.remove("is-open");
    changeImg.src = "";
    changeImg.alt = "";
}

document.addEventListener("keydown", event => {
    if (event.keyCode === 27) {
        closeGallery()
    }
})
