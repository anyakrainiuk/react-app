const numbersOfFilms = prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB ={
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', '');
  const b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {

  personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

if (personalMovieDB.count < 10){
  console.log('Просмотренно довольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель')
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка')
}

// console.log(personalMovieDB);
