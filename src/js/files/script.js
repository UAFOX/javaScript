// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

"use strict";

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



// let num = 20;

// function showFirstMassage (text) {
//         console.log(text);
//         let num = 10;
//         console.log(num);
// }

// showFirstMassage("Hello World!");
// console.log(num);

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

// const str  = 'hello';
// const arr = [1, 2, 4]

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "some Fruit";

// console.log(fruit.indexOf("q"));

// const logg = "darou bro";
// console.log(logg.slice(6, 9));

// const tip = "Шо нада";
// console.log(tip.slice(0, 999));
// const pip = "Шо нада";
// console.log(pip.slice(3));
// const pip3 = "Шо нада";
// console.log(pip3.slice(-3));

// const subString = "Шо нада";
// console.log(subString.substring(3));

// const sus = "Шо нада";
// console.log(sus.substr(3, 4));

// const number = 12.4;
// console.log(Math.round(number));

// const test = "12.2px"
// // console.log(parseInt(test)); // возвращает только целую часть числа
// console.log(parseFloat(test)); // возвращает только дробную часть числа




// вопросы

let numbefOfFilms;

function start() {
        numbefOfFilms = +prompt("Сколько фильмов вы уже просмотрели", "");

        while (numbefOfFilms == '' || numbefOfFilms == null || isNaN(numbefOfFilms)) {
                numbefOfFilms +prompt('Сколько фильмов вы уже посмотрели', '');
        }
}
start();


const personalMovieDB = {
    count: numbefOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
                const a = prompt('Один из последних просмотренных фильмов');
                const b = prompt('Рейтинг Фильма');
        
                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                        personalMovieDB.movies[a] = b;
                        console.log('done');
                } else {
                        console.log('error');
                        i--;
                }
        }
}
// rememberMyFilms();



function detectPersonalLevel () {
        if (personalMovieDB.count < 10) {
                console.log('Шото Маловато ты сотриш');
        } else if  (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('Почти зврь');
        } else if (personalMovieDB.count >= 30) {
                console.log('Ты бля вообщ звер');
        } else {
                console.log('Ошибочка вышла');
        }
}
// detectPersonalLevel();

function showMyDB(hidden)  {
        if (!hidden) {
                console.log(personalMovieDB);
        }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
                const genre = prompt(`Ваш любимый жанр под номром ${i}`);
                personalMovieDB.genres[i - 1] = genre;
        }
}
writeYourGenres();


console.log(personalMovieDB);


