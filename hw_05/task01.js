// Задание 1
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.

Account.prototype.getInfo = function () {
    console.log(this.login, this.email);
};
console.log(Account.prototype.getInfo); // function
function Account(login, email) {
    (this.login = login), (this.email = email);
}

const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
});
poly.getInfo(); // Login: Poly, Email: poly@mail.com
console.log(Account.prototype.getInfo);
