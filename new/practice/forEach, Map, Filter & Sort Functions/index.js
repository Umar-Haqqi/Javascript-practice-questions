const books = [
    {
        title: "The Great Gatsby",
        genre: "Fiction",
        publishDate: 2005,
        currentEdition: "Paperback"
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        publishDate: 1990,
        currentEdition: "Hardcover"
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        publishDate: 1937,
        currentEdition: "Paperback"
    },
    {
        title: "A Song of Ice and Fire",
        genre: "Fantasy",
        publishDate: 1996,
        currentEdition: "Hardcover"
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        genre: "History",
        publishDate: 2011,
        currentEdition: "Ebook"
    },
    {
        title: "The Guns of August",
        genre: "History",
        publishDate: 1962,
        currentEdition: "Paperback"
    },
    {
        title: "Dune",
        genre: "Science Fiction",
        publishDate: 1965,
        currentEdition: "Hardcover"
    },
    {
        title: "Neuromancer",
        genre: "Science Fiction",
        publishDate: 1984,
        currentEdition: "Ebook"
    },
    {
        title: "Pride and Prejudice",
        genre: "Fiction",
        publishDate: 1813,
        currentEdition: "Paperback"
    },
    {
        title: "Brave New World",
        genre: "Science Fiction",
        publishDate: 1932,
        currentEdition: "Paperback"
    }
];


// *** Assignment 1 ***
// first filter and select all books published in or after 1990, then sort to arrange latest first then accordingly and then Map through and display in console also print its genre
const getBooks = books.filter((book) => book.publishDate >= 1990)
    .sort((bookX, bookY) => bookX.publishDate < bookY.publishDate ? 1 : -1)
    .map((book) => book.currentEdition === "Ebook" ? `${book.title} is available on Google, Genre: ${book.genre} and its Publish date: ${book.publishDate}` : `${book.title} is not on Internet , Genre${book.genre} and its Publish date: ${book.publishDate}`);
console.log(getBooks);


// *** solution 1 - for loop
const booksTitle = []
for (let i = 0; i < books.length; i++) {
    if (books[i].publishDate >= 1990) {
        booksTitle.push(`Books Title: ${books[i].title} and there Publish date is ${books[i].publishDate}`)
    }
}
// console.log(booksTitle);


// *** solution 2 - forEach
const booksGenre = []
books.forEach((book) => {
    if (book.genre === "Science Fiction") {
        booksGenre.push(`${book.title} genre is ${book.genre}`)
    }
})
// console.log(booksGenre);


// *** solution 3 - Map
const booksPublishDate = []
books.map((book) => {
    if (book.publishDate >= 2000) {
        booksPublishDate.push(`books written after 2000 are: ${book.title}`)
    }
})
// console.log(booksPublishDate);


// *** solution 4 - more optimize ways / with filter and chaining
const filterBooks = books.filter((book) => book.publishDate < 1950).map((book) => `Book: ${book.title} and its Publish date: ${book.publishDate}`)
// console.log("old books: ", filterBooks);


// *** solution 5 - sort by publish date

const sortBooks = books.sort((bookX, bookY) => bookX.publishDate < bookY.publishDate ? 1 : -1).map((book) => {
    return `${book.title} and publish date ${book.publishDate}`
})
// console.log(sortBooks);



// forEach do not return, means will make changes in orignal array, and is similar to for loop and no need for indexing. if try to store in const it will give an error, bcuz it doesnot have return value
// Map is similar to forEach, but return a new array/function,
// sort works for both, but behave differently for number and string and used to sort array

// time stamp 12:00
