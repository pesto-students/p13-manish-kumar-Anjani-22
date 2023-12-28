function useFilter(term, books) {
  const searchedBooks = books.filter((book) =>
    (book.title + book.detail).includes(term)
  );
}
