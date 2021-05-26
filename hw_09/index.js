const menu = require('./menu.json');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

let ulRef = document.querySelector('ul.menu');
const switchTheme = document.querySelector('#theme-switch-toggle');

switchTheme.addEventListener('click', (evnt) => {
  // console.log(evnt);
  const isDarkModeOn = evnt.target.checked;
  const bodyRef = document.querySelector('body');
  bodyRef.classList.toggle(Theme.LIGHT, !isDarkModeOn);
  bodyRef.classList.toggle(Theme.DARK, isDarkModeOn);
  localStorage.setItem('Theme', isDarkModeOn ? Theme.DARK : Theme.LIGHT);
})

const getListItem = item => {
  return item.map(ingredient => `<li class="tag-list__item">${ingredient}</li>`).join('');
};

let dishArr = [];
const showImg = menu => menu.forEach(dish => {
    let liRef = document.createElement('li');
    liRef.insertAdjacentHTML('beforeend', `<li class="menu__item">
    <article class="card">
      <img
        src="${dish.image}"
        alt="${dish.name}"
        class="card__image"
      />
      <div class="card__content">
        <h2 class="card__name">${dish.name}</h2>
        <p class="card__price">
        <i class="material-icons"> monetization_on </i>
        ${dish.price} кредитов
      </p>
        <p class="card__descr">
        ${dish.description}
        </p>
        <ul class="tag-list">
        ${getListItem(dish.ingredients)}
        </ul>
      </div>
      <button class="card__button button">
        <i class="material-icons button__icon"> shopping_cart </i>
        В корзину
      </button>
    </article>
  </li>`)
    dishArr.push(liRef)
});
showImg(menu);
ulRef.append(...dishArr);

document.addEventListener("DOMContentLoaded", function (event) {
  const bodyRef = document.querySelector('body');
  const theme = localStorage.getItem('Theme');
  switchTheme.checked = theme === Theme.DARK;
  bodyRef.classList.add(theme);
});