// 1 задание

// let lang = prompt('Какой язык выберите?(Введите ru или en)')

// через if

// if (lang === null) {
//     alert('Вы нажали Отмена!')
// } else if (lang === '') {
//     alert('Вы нажали Продолжить без значения!')
// } else if (lang !== 'ru' && lang !== 'en') {
//     alert('Вы ввели неправильное значение!')
// } else if (lang === 'ru') {
//     alert('Понеденик, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье')
// } else if (lang === 'en') {
//     alert('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday')
// }

// через switch-case

// switch (true) {
//     case lang === null:
//         alert('Вы нажали Отмена!')
//         break
//     case lang === '':
//         alert('Вы нажали Продолжить без значения!')
//         break
//     case lang !== 'ru' && lang !== 'en':
//         alert('Вы ввели неправильное значение!')
//         break
//     case lang === 'ru':
//         alert('Понеденик, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье')
//         break
//     case lang === 'en':
//         alert('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday')
//         break
// }

// через многомерный массив без ифов и switch

// let langs = {
//     ru: ['Понеденик', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// }

// alert(langs[lang])

// 2 задание

let namePerson = prompt('Введите имя');

namePerson === 'Артем' ? console.log('директор') : namePerson === 'Александр' ? console.log('преподаватель') : console.log('студент')
