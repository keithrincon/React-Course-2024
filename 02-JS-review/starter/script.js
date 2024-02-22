// Desctructoring Objects

const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructoring objects
const book = getBook(3);
book;
// const title = book.title;
// const author = book.author;

// title;
// author;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// Destructoring arrays

// const primaryGenres = genres[0];
// const SecondaryGenres = genres[1];

// Rest Operator - for arrays
const [primaryGenres, SecondaryGenres, ...otherGenres] = genres;

console.log(primaryGenres, SecondaryGenres, otherGenres);

// Spread Operator - for arrays
// ex: want to create a new array with all the genres but add a new one to the end
// all in one array
// this ... systax at the beginning of array will help do that
const newGenres1 = [...genres, 'epic fantasy'];

// this ... systax at the end of array will help do that
const newGenres2 = ['epic fantasy', ...genres];

// Rest Operator for objects allows us to add new properties and update exsiting ones.
// creating when movie was published
// We want it all in one object
const updatedBook = {
  ...book,
  // adding a new property
  moviePublicationDate: '2001-12-19',
  // Overwriting an existing property - react technique
  pages: 1210,
};
updatedBook;
const getYear = (str) => str.split('-')[0];
console.log(getYear(publicationDate));

// Template Literals  ES6 feature

// creating a string that contains a summary of book content

// split by dash which turns into an array and from there we take the first element - year
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? '' : 'not'} been adapted as a movie`;
summary;

// Ternaries  instead of IF/ELSE Statements

const pagesRange = pages > 1000 ? 'over a thousand' : 'less than 1000';
// condition  - the result incase its true - if false itll be the third part

pagesRange;

console.log(`The book has ${pagesRange} pages`);

// Arrow functions

// The traditional way of writing functions
// Function declaration

// function getYear(str) {
//   return str.split('-')[0];
// }

// Function expression - for one liners
// const getYear = (str) => str.split('-')[0];

// wrapped the parameter/arguement can be multiple

// more than one line - need return keyword otherwise you get undefined
// const getYear = (str) => {
//   return str.split('-')[0];
// };

// console.log(getYear(publicationDate));

// Short Circuting - the operator will immidately return the first value without looking at the next value

console.log(true && 'Some string');
// will look at the first value following
console.log(false && 'some string');
//  && - works when the first value is false - wont look at the second value

// useful as an if
console.log(hasMovieAdaptation && 'This book has a movie');
// thruthy and falsy values
// thruthy any value not falsey

// falsy = 0 ,"", null, undefined
console.log('jonas' && 'Some String');

console.log(0 && 'somestring!');

// or || operator - works in the opposite way as &&
console.log(true || 'Some string');
// immidatly get true
console.log(false || 'Some string');
// looks at the second value

// this allows us to use it to our advantage:
console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || 'NOT TRANSLATED';
// falsey looks at the second value

spanishTranslation;

// can go wrong cause of the 0
// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || 'no data';

// countWrong;
// its wrong because it things its a falsey value

// the workaround!
// the nullish colaensing operator
// const count = book.reviews.librarything.reviewsCount ?? 'no data';
// count;
// now its 0!
// therefore return the second value when the first value is null or undefined
// not when its 0 or undefined

// optional chaining - asks JS to only keep asking the next properties unless it exsits
// ex "vardonestexist.neither.does.does" itll by pass in a way to the '.does' that exist
// book.review.libaray?.vardoesnotexist itll only continue if it exist.
// result will be NaN and not undefined
// want to add a variable number within 2 different ones

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  // however since there is a value we use nullish coalescing to give us the actual value of 0 inorder to add the rest and not throw an error or NaN
  // when we are not sure if there will be a value
  // only continues to reviewCount is not undefined or not null
  // if undefined then it wont try continuing - reviewsCount
  librarything;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/

// MUST master of the 3 functional array methods is nessecary! Map - Filter - Reduce
// do not mutate og array but return a new array based on the og one.

// MAP Method - will loop over an array and return a new array with the same length with some operation applied to each of the elements of the og array
/*
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  // however since there is a value we use nullish coalescing to give us the actual value of 0 inorder to add the rest and not throw an error or NaN
  // when we are not sure if there will be a value
  // only continues to reviewCount is not undefined or not null
  // if undefined then it wont try continuing - reviewsCount
  librarything;
  return goodreads + librarything;
}

// give us the enitre books array
const books = getBooks();
books;

// map() inside will expect a callback function for each of the elements inside the of array 1-5

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

// create an array of all the titles

const titles = books.map((book) => book.title);
titles;

// only the essentials - title and author

const essentialData = books.map((book) => ({
  title: book.title,
  auther: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData;

// The Array Filter Method - to filter out some elements on an array based on a condition

// filter books that have more than 300 pages
// filter items wont get printed

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

// filter for adventure books
const adventureBooks = books
  .filter((books) => books.genres.includes('adventure'))
  .map((book) => book.title);
adventureBooks;

// react is all about working with data!

// The reduce method! Most versital one most most powerful

// adding numbers or any operation

// the goal is to reduce the entire array to just one value
// ex: book1 200pg + 220pg + 100pg = reduces tp 520pgs

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
//
pagesAllBooks;

const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
// lowest to highest

sorted;

arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);

sortedByPages;
// both get sorted
// sort mutates the og array

// using slice makes a new one

////----////

// in React many operations need to be immutable where we dont immutable the underlining data structure
// LEARN HOW TO ADD DELETE UPDATE ELEMENTS IN AN ARRAY WITHOUT CHANGING THE OG ONE.

// array of object - common

// 1) Add book object to array
const newBook = {
  id: 6,
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J. K. Rowling',
};

const booksAfterAdd = [...books, newBook];

booksAfterAdd;

//2) Delete book object from array
// array will be short than it was before using the filter array

// is different from 3 -     when it returns a false value then that object wont be in the final array
// when it is 3 we want to delete it
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

//3) Update book object in the array - map when we want to update an object thats inside an array
// adding a
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;


*/

// ASYNCHRONOUS JAVASCRIPT: PROMIES

// FETCH API

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log('keith');

// ASYNC/AWAIT
// MUCH CLEANER THAN PROMISES

// pauses it and makes it look more normal
// response - res
async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
}

getTodos();
