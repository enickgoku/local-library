function findAccountById(accounts, id) {
  //returns account that shares the same idea as the id passed into the function.
  return accounts.find(account => account.id === id)
}

const sortAccountsByLastName = accounts => {
  return accounts.sort((accountOne, accountTwo) => {
    const surNameA = accountOne.name.last
    const surNameB = accountTwo.name.last
    return surNameA < surNameB ? -1 : 1
  })
}

const getTotalNumberOfBorrows = (account, books) => {
  //destructure id from account argument
  const { id } = account
  let total = 0
  //destructure borrows array and loop through it searching for ids that match account id then add to the counter
  for(const borrowed in books){
    const { borrows } = books[borrowed]
    borrows.forEach(propertyId => {
      if(propertyId.id === id){
        total++
      }
    })
  }
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  //create borrowed array
  const borrowedBooks = [];
  //find borrowed books
  books.forEach((book) => {
    let bookBorrows = book.borrows;

//loops through the borrows array to check if the borrowers ID matches the accounts ID
    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        borrowedBooks.push(book);
      }
    });
  });

  //returns a new object within an array of all of the borrowed books 
  let result = borrowedBooks.map((book) => {
    return { ...book, author: findAuthorById(book, authors) };
  });

  return result;
}
