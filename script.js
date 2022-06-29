'use strict'

let title
let screens
let screenPrice
let adaptive
let rollback = 10
let allServicePrices
let fullPrice
let servicePercentPrice
let service1
let service2

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function() {
    title = prompt('Как называется наш проект?', 'My project')
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные')

    // screenPrice = prompt('Сколько будет стоить данная работа?')

    // while (isNaN(screenPrice) || screenPrice.trim() === "" || screenPrice === null) {
    //     screenPrice = prompt('Сколько будет стоить данная работа?')
    // } - тут не идеальное решение с багами

    // while (!isNumber(screenPrice)) {
    //     screenPrice = prompt('Сколько будет стоить данная работа?')
    // }

    //Переписываем получение значение переменной screenPrice на do...while
    do {
        screenPrice = prompt('Сколько будет стоить данная работа?')
    } while (!isNumber(screenPrice))

    adaptive = confirm('Нужен ли адаптив на сайте?')
}

const getAllServicePrices = function () {
    let sum = 0
    let sumService

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?', 'Верстка хедера')
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'Верстка футера')
        }

        // Проверка что введенные данные являются числом
        // sum += +prompt('Сколько это будет стоить?')
        // sum = prompt('Сколько это будет стоить?')

        // while (!isNumber(sum)) {
        //     sum += prompt('Сколько это будет стоить?')
        // }

        do {
            sumService = prompt('Сколько это будет стоить?')
        } while (!isNumber(sumService))

        sum += +sumService

    }

    return sum
}

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

function getFullPrice() {
    return +screenPrice + allServicePrices
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100))
}

const getTitle = function () {
    // return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
    title = title.trimStart()
    return title[0].toUpperCase() + title.substring(1)
}

const getRollBackMessage = function(price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%'
    } else if (price >= 15000 && price < 30000) {
        return 'Даем скидку в 5%'
    } else if (price >= 0 && price < 15000) {
        return 'Скидка не предусмотрена'
    } else {
        return 'Что то пошло не так'
    }
}

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(getRollBackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log("Стоимость верстки экранов " + screenPrice + " юани и Стоимость разработки сайта " + fullPrice + " юани");