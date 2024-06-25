const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
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
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
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
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
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
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
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
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
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
const books = getBook(3);

// destructuring of objects
const { title, author, pages, genres } = books;
console.log(title, author, pages, genres);

// destructuring of array elements

const [primaryGenres, secondaryGenres] = genres; // The order will be maintained
console.log(primaryGenres, secondaryGenres);

// Rest operator -> to get all other values from the array, where the resulting output is also an array
const [pGenres, ...otherGenres] = genres;
console.log(otherGenres);

// Spread operator -> to create a new array, where it takes out all the values and converts into another array
//  On Arrays
const newGenres = [genres, "epic fantasy"];
console.log(newGenres);

//  see the difference in output, below newGenres uses a spread operator

const newGenres2 = [...genres, "epic fantasy"];
console.log(newGenres2);

// On Objects

const updatedBook = { books, moviePublicationDate: "2001-12-19" }; // this gives new property value in book inside a book
// on using spread operator this could be overcome

const updatedBook2 = {
  ...books,
  // adding new property
  moviePublicationDate: "2002-12-19",
  //over writing an existing a property
  pages: 1210,
}; // new object will be created
updatedBook;
updatedBook2;

// short circuiting

console.log(true && "some string");
console.log(false && "some string");

// falsy value : null , ' ', 0 , undefined
console.log(0 && "some string");

// optional chaining
// check it for book of id 3
function getTotalReviews(books) {
      const goodreads = books.reviews.goodreads.reviewsCount;
      const librarything = books.reviews.librarything?.reviewsCount ?? 0;
      return goodreads + librarything;
}

console.log(getTotalReviews(books));
*/

/*
// Array Map method
// used to create new array with already existing array with an operation applied on each element of an array

// --> example, how does map method applies on array
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const books = getBooks();

const title = books.map((book) => book.title);
console.log(title); // gives all the books titles

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
console.log(essentialData);

// Array Filter method
// based on some condition array elements can be filtered

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

// filtering for only adventuring books

const adventureBook = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBook;

// reduce method
// this method is used to reduce the array value into a single one value

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// Array Sort method
// the arr array elements would be changed, to over come this use slice method on it
const arr = [3, 7, 4, 1, 6, 2];
// const sorted1 = arr.sort((a, b) => a - b);
// sorted1;
// const sorted2 = arr.sort((a, b) => b - a);
// sorted2;

// // to create a copy of array
// const sorted3 = arr.slice().sort((a, b) => a - b);
// sorted3;
// arr;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

// Immutable array

// 1) add book object to array

const newBook = {
  id: 6,
  title: "Harry Potter and the chamber of secrets",
  author: "J K Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3)

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? {} : book
);
*/

// Asynchronous js promises

//  fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("Jonas");

// async function getTodos() {
//       const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//       const data = await res.json()
//       console.log(data);

//       return data;
// }

// const todos =  getTodos()
// console.log(todos)

// console.log('React Js')


git remote add origin https://github.com/Thejas027/ReactJS.git
git branch -M main
git push -u origin main