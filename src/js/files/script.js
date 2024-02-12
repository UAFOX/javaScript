// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

// "use strict";
// let boxBox = 10;
// const box = ['box.jpg',  'box-2.jpg', 'box-3.jpg', 'box-4.jpg', [boxBox = 1]];
// console.log(box[4]);

// let incr = 10,
//     decr = 10;

// console.log(incr++);
// console.log(decr--);

// console.log(5 % 2);
// console.log(2 * 4 == "8");

// const isCheked = true,
//     isClose = false;
// console.log(isCheked && isClose);

// console.log(isCheked || isClose);

// console.log(!isCheked || isClose);

// const result = confirm("Шото Нада?")
// console.log(result);

// const answer = prompt("Сколько вам Лет?", "18");
// console.log(answer);

// Создание Вопросов  и Ответов
// const answers = [];
// answers[0] = prompt('Name', '');
// answers[1] = prompt('Age', '');
// answers[2] = prompt('Sex', '');
// console.log(typeof(answers));

// const numbefOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');
// const personalMovieDB = {
//         count: numbefOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('Какой был рейтинг этого фильма?', ''),
//         c = prompt('Один из последних просмотренных фильмов?', ''),
//         d = prompt('Какой был рейтинг этого фильма?', '');

//         personalMovieDB.movies[a] = b;
//         personalMovieDB.movies[c] = d;
//         console.log(personalMovieDB);

// const num = 50;

// switch (num) {
//         case 49:
//                 console.log('Неверно');
//         break;

//         case 100:
//                 console.log('Неверно');
//         break;
//          case 50:
//                 console.log('Верно');
//         break;

//         default:
//         console.log('Не в этот раз');
//         break;
// }

// let num = 50;

// while (num <= 55) {
//         console.log(num);
//         num++;

// }

// do {
//         console.log(num);
//         num++;
// }

// while (num <= 55);

// for (let i = 1; i < 8; i++) {
//         console.log(num);
//         num++;
// }




// вопросы
// const numbefOfFilms = +prompt("Сколько фильмов вы уже просмотрели", "");
// const personalMovieDB = {
//     count: numbefOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("Какой был рейтинг этого фильма?", "");

//     if (a != null && b != null && a != "" && b != "" && a.langth < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//         console.log('Очень мало фильмов');
// } else if (personalMovieDB.count >= 10 &&  personalMovieDB.count < 30) {
//         console.log('Мощно конечно');
//  } else if (personalMovieDB.count >= 30) {
//         console.log('Дохрена');
//  } else {
//         console.log('Шото не так');
        
//  }


// console.log(personalMovieDB);


let num = 20;


function showFirstMassage (text) {
        console.log(text);
        let num = 10;
        console.log(num);
}

showFirstMassage("Hello World!");
console.log(num);




// function calc(a, b) {
//         return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));





// function ret() {
//         let num = 50;
//         return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);




// const logger = function() {
//         console.log('hi bro');
        
// };

// logger();




// const calc = (a, b) => {
// console.log('1');
// return a + b;
// };












