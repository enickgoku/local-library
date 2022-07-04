const findAuthorById = (book, authors) => {
  //compares author id with author id nested within a book object
  const author = authors.find(author => author.id === book.authorId)
  return author
}

const findBookByAuthor = (books, authorId) => {
  // finds a book by comparing author id in a book object with id passed into the function.
  return books.filter((book) => book.authorId === authorId);
};

const returnedBooks = (books) => {
  //finds returned books by evaluating if the returned value is true.
  let result = books.filter((book) => book.borrows[0].returned === true)
  return result
}

const notReturnedBooks = (books) => {
  // finds non returned books with the previous function logic but the value being false.
  let result = books.filter((book) => book.borrows[0].returned === false)
  return result
}

const sortAndSliceArray = (arr, slice = 5) => {
  // argArr = argument array and rest is used here handle whatever argument passed in.
  const argArr = [...arr];
  return argArr
  // sort is used here for the purpose of the what the functions were required to return
  .sort(({ count: count1 }, { count: count2 }) => count2 - count1)
  // a default parameter is used here to make sure the returning object is not larger than 5.
  .slice(0, slice)
}
