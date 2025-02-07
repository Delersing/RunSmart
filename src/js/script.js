// для проверки работы alert(1);
// переменная это let
// есть еще const
// Типы данных:
// number
// string: '', "", ``
// true/false
// null - не существует
// undefined - существует, но значения не имеет, напри мер указали перменную let leftBorderWidth; без = то значения не имеет, хотя существует
// Symbol
// alert(1234) - используется редко.
// console.log("bfhsdj") - информация появляется в консоли, для общения с разработчиком, который пишет этот скрипт. Можно посмотреть что лежит в любом класе, например в Number:   console.log(number);
// confirm("") - можно написать какой-либо вопрос, например: confirm("Вам есть 18?")? А зачем мне вообще эта команда? для формирования поведения моего сайта. Например: let answer = confirm("Вам есть 18?"); console.log(answer); В зависимости от ответа(да/нет) - соответственно выведет (true/false)
// *
// {} - это комплексный тип данных, который может содержат ьв себе любые другие типы данных. Например:
// let obj = {
//     name: 'apple',
//     color: 'green',
//     weight: 200
// }
// *
// let answer = confirm("Вам есть 18?");
// console.log(answer);
// * с полем для ввода от пользователя (взаимодействие с пользователем), в консоль выводится ответ пользователя, не true/false, а его реальные слова *
// let answer = prompt("Вам есть 18?", "");
// console.log(answer);
// * ОПЕРАТОРЫ *
// console.log(4+4) - выведет в консоль 8
// console.log(4-вйцм) - выведет ошибку Nan
// console.log(4+вйцм) - выведет 4вйцм ,сделает конкатенацию вместо ошибки
// * Логический оператор (И) - && *
// let isChecked = true,
// isClose = true; - мы не ставили в начале let, т.к. идет перечисление операторов и соответсвенно можно не уазывать приставку let
// console.log(isChecked && isClose);
// * Логический оператор (ИЛИ) - || *
// let isChecked = true,
//     isClose = false;
// console.log(isChecked || isClose);


// Два принципа программирование: 1 - условия, 2 - циклы. И функции.

// * УСЛОВИЯ *
// let answer = confirm("Вам есть 18 лет?")
// if (answer) {
//     console.log('Проходите')
// } else {
//     console.log('посмотрите лучше котиков');
// }
// *
// const num = 50;
// if (num < 49) {
//     console.log('неправильно')
// } else if (num > 100) {
//     console.log('Много')
// } else {
//     console.log('Верно')
// }

// * Циклы *

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

// * ФУНКЦИИ *
// function logging(a, b) {
//     console.log(a + b);
// }

// logging(3, 5);

// logging(-6, -2);

//для работы слайдера
// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftArrow.svg"></button>',
//         nextArrow: '<button type="button" class="slick-prev"><img src="icons/leftArrow.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
// });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    autoHeight: true,
    speed: 800
});
// снизу более современная запись обработчика onclick() - это addEventListener('click'). И кстати, главное не сделать ошибку в написании самого метода, потому что addeventlisrener не имеет ничего общего с addEventListener, буква т, Вано, буква Т! 
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});
// document.querySelector('.prev').onclick = function () {
//     slider.goTo('prev');
// };
// document.querySelector('.next').onclick = function () {
//     slider.goTo('next');
// };
