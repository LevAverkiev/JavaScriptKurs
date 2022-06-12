// let title = 'My project';
let title = prompt('Как называется наш проект?', 'My project')
// let screens = 'Простые, Сложные, Интерактивные';
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные')
// let screenPrice = 1000;
let screenPrice = +prompt('Сколько будет стоить данная работа?', 1000)
let adaptive = confirm('Нужен ли адаптив на сайте?')
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Верстка хедера')
let servicePrice1 = +prompt('Сколько это будет стоить?', 2000)
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'Верстка футера')
let servicePrice2 = +prompt('Сколько это будет стоить?', 3000)
// let fullPrice = 100000;
let fullPrice = screenPrice + servicePrice1 + servicePrice2
let rollback = 15;
let servicePercentPrice = fullPrice - (fullPrice * (rollback/100))
// let adaptive = true;

// console.log(typeof title);
console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log(servicePercentPrice);
if (fullPrice >= 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice < 30000 && fullPrice >= 15000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что то пошло не так');
}
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');
console.log(screens.toLowerCase().split(', '));
console.log('Процент отката посреднику за работу ' + (fullPrice * (rollback/100)));