import React from "react";
import books from "./books";
import Book from "./Book";
import "./style.css";
import Title from "./title";

function App() {
  return (
    <>
      <Title title="Book List" className="title" />
      <div className="flex-container">
        {books.map((book) => (
          <Book book={book} />
        ))}
      </div>
    </>
  );
}

export default App;
