import Book from "./Book";
import React, { useEffect } from "react";

export default function BookList({ books, onDelete }) {
  return (
    <div className="flex-container ">
      {books.map((book) => (
        <Book book={book} onDelete={onDelete} key={book.title} />
      ))}
    </div>
  );
}
