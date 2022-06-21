'use strict'

const findFunc = function(item) {
    if (typeof(item) != 'string') { //проверка на тип 'строка'
        console.log('Это не строка'); 
    } else {
        item = item.trim() //убрали пробелы в начале и в конце строки
        if (item.length > 30) { //проверка на кол-во символов
            let str = item.slice(0, 30) //оставить строку с 1 по 30 символ. Остальное обрезать
            console.log(str + '...'); //вывести строку + ... в конце
        } else {
            console.log(item);
        }
    }
}

findFunc('   1    gfdgdfgfdgfdgfdgergdfcbxftbterebvcbdfb');