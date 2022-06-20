'use strict'

let title = prompt('Как называется наш проект?', 'My project')
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные')
let screenPrice = +prompt('Сколько будет стоить данная работа?', 1000)
let adaptive = confirm('Нужен ли адаптив на сайте?')
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Верстка хедера')
let servicePrice1 = +prompt('Сколько это будет стоить?', 2000)
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'Верстка футера')
let servicePrice2 = +prompt('Сколько это будет стоить?', 3000)
let allServicePrices
let fullPrice
let servicePercentPrice
let rollback = 15;

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const getRollBackMessage = function(price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%'
    } else if (price < 30000 && price >= 15000) {
        return 'Даем скидку в 5%'
    } else if (price < 15000 && price > 0) {
        return 'Скидка не предусмотрена'
    } else {
        return 'Что то пошло не так'
    }
}

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2
}

function getFullPrice() {
    return screenPrice + allServicePrices
}

const getTitle = function () {
    title = title.trimStart()
    return title[0].toUpperCase() + title.substring(1)
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100))
}

allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()

console.log(allServicePrices);
console.log(fullPrice);
console.log(getTitle());
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
console.log(screens.toLowerCase().split(', '));
console.log(servicePercentPrice);
console.log(getRollBackMessage(fullPrice));