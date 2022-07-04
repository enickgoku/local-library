const getTotalBooksCount = (books) => {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  // start a counter
  let numberOfBorrowedBooks = 0
  //loop through books array
  for(let book in books) {
    const library = books[book]
    //access returned key value pair
    if (library.borrows[0].returned === false) {
      //add to the counter if it is not returned
      numberOfBorrowedBooks+=1
    }
  }
  return numberOfBorrowedBooks
}

function getMostCommonGenres(books) {
  // pass the logic through the helper function to save a few lines at the end.
  return sortAndSliceArray(
    books
      .reduce((genres, book) => {
        const matchingGenre = genres.find((genre) => genre.name === book.genre);
        // if matching genre does not exist push to genres array otherwise add to the matchingGenre variable
        !matchingGenre ? genres.push({ name: book.genre, count: 1 }) : matchingGenre.count++;
        return genres;
      }, [])
  );
}

function getMostPopularBooks(books) {
  // create a result array with most popular books using map and length property
  const result = books.map((book) => {
    const popularBooks = {
      name: book.title,
      count: book.borrows.length,
    }
    return popularBooks
  })

  return sortAndSliceArray(result)
}

function getMostPopularAuthors(books, authors) {
  const result = authors.map((author) => {
    // destructure to shortent template literal
    const { name } = author
    // variable to shorten object key name:
    const wholeName = `${name.first} ${name.last}`
    // helper function finds books with mathing author id's
    const booksWrittenByCertainAuthor = findBookByAuthor(books, author.id)
    // uses reduce to create a total borrow amount
    const totalBorrowsAmount = booksWrittenByCertainAuthor.reduce((accum, book) => accum + book.borrows.length, 0)
    //create an object for these name and amount variables
    const authorObject = {
      name: wholeName,
      count: totalBorrowsAmount,
    }
    return authorObject
  })
  return sortAndSliceArray(result)
}
