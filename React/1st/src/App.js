import React, { useState } from "react";
import BookForm from "./BookForm";
import "./style.css";
import Title from "./title";
import BookList from "./BookList";

const bookList = [
  { title: "Book 1", author: "Author 1", year: 2020 },
  { title: "Book 2", author: "Author 2", year: 2018 },
  { title: "Book 3", author: "Author 3", year: 2022 },
  // Add more books if you'd like
];

function App() {
  const [books, setBooks] = useState(bookList);
  function addBook(book) {
    setBooks((prevbooks) => [...prevbooks, book]);
  }
  return (
    <div>
      <Title title="Book List" className="title" />
      <div className="form">
        <BookList books={books} />
        <BookForm addBook={addBook} />
      </div>
    </div>
  );
}

export default App;
