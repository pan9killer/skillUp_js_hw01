/* Задание 1
Напиши скрипт, который, для объекта user, последовательно:
добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of */
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
console.log(user);
let keys = Object.keys(user);
let totalKeys = 0;
for (let key of keys) {
    console.log(key);
    totalKeys += user[key];
}
let value = Object.values(user);
let totalValue = 0;
for (let val of value) {
    console.log(val);
    totalValue += user[val];
}
console.log(keys, value);
