// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";



// "use strict";
// let boxBox = 10;
// const box = ['box.jpg',  'box-2.jpg', 'box-3.jpg', 'box-4.jpg', [boxBox = 1]];
// console.log(box[4]);


let incr = 10,
    decr = 10;

    console.log(incr++);
    console.log(decr--);

    console.log(5%2);
    console.log(2*4 == '8');

    const isCheked = true,
            isClose = false;
            console.log(isCheked && isClose);
            
            console.log(isCheked || isClose);

            console.log(!isCheked || isClose);

            
    
    




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


const numbefOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');
const personalMovieDB = {
        count: numbefOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('Какой был рейтинг этого фильма?', ''),
        c = prompt('Один из последних просмотренных фильмов?', ''),
        d = prompt('Какой был рейтинг этого фильма?', '');

        personalMovieDB.movies[a] = b;
        personalMovieDB.movies[c] = d;
        console.log(personalMovieDB);
        

