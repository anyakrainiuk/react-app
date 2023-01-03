const numbersOfFilms = prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB ={
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);