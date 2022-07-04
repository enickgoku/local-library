const findAuthorByIds = (authors, id) => {
  //finds author by looping through authors and matching their id with the id passed into the function.
  return authors.find(author => author.id === id)
}

const findBookById = (books, id) => {
  //same concept as the previos function but with book id's instead of author id's.
  return books.find(book => book.id === id)
}

const partitionBooksByBorrowedStatus = (books) => {
  //create an empty array
  let result = []
  // use helper funtions to find books that are returned and not returned
  const returned = returnedBooks(books)
  const notReturned = notReturnedBooks(books)
  //push these values into the result array
  result.push(notReturned)
  result.push(returned)

  return result
}

function getBorrowersForBook(book, accounts) {
  // destructure borrows array from book
  const { borrows } = book
  
  // loop through borrows array and match borrows id with account id and return it in an object less than 10
  return borrows.map((record) => {
    const matchedAccount = findAccountById(accounts, record.id)
    return {...record, ...matchedAccount}
  }).slice(0, 10)
}
