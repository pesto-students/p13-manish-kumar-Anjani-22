import Book from "./Book";
import React from "react";

export default function BookList({ books, onDelete }) {
  return (
    <div className="flex-container ">
      {books.map((book) => (
        <Book book={book} onDelete={onDelete} />
      ))}
    </div>
  );
}
