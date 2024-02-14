import React, { useState, useEffect } from "react";
import BookList from "./BookList";

const intialbook = [
  { title: "Book 1", author: "Author 1", year: 2020 },
  { title: "Book 2", author: "Author 2", year: 2018 },
  { title: "Book 3", author: "Author 3", year: 2022 },
  // Add more books if you'd like
];
function BookDataLoader() {
  const [books, setBooks] = useState(intialbook);
  useEffect(() => {
    async function getBooks() {
      const res = await fetch("booksApi");
      const data = res.json();

      setBooks((prevbooks) => [...prevbooks, data]);
    }
    getBooks();
  }, [books]);

  return <BookList bookLoader={books} />;
}
