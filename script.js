'use strict';

const allBooks = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
let book2, book3, book5, book6;

document.body.style.backgroundImage = "url(image/you-dont-know-js.jpg)"; // Заменили картинку

allBooks[0].before(allBooks[1]); // Тут восстановили порядок книг
allBooks[0].after(allBooks[4]);
allBooks[4].after(allBooks[3]);
allBooks[3].after(allBooks[5]);

adv.remove(); // Удалили рекламу со страницы

book3 = allBooks[4].children[0].childNodes[1].textContent = 'Книга 3. this и Прототипы Объектов';
// Выше заменили заголовок

// Тут меняем порядок глав в книгах
book2 = allBooks[0].querySelectorAll('li');
book2[1].after(book2[3]);
book2[3].after(book2[6]);
book2[6].after(book2[8]);
book2[8].after(book2[4]);
book2[4].after(book2[5]);
book2[5].after(book2[7]);
book2[7].after(book2[9]);

book5 = allBooks[5].querySelectorAll('li');
book5[1].after(book5[9]);
book5[9].after(book5[3]);
book5[3].after(book5[4]);
book5[4].after(book5[2]);
book5[2].after(book5[6]);
book5[6].after(book5[7]);

// Добавляем нужный элемент в нужное место

book6 = allBooks[2].querySelectorAll('li');
book6[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');