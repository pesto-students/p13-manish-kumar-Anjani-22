import React, { useState } from "react";

export default function Book({ book, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex-Button-Container">
        <button
          class="btn btn-light"
          type="button"
          data-toggle="collapse"
          data-target={`#${book.title}`}
          aria-expanded="false"
          aria-controls={`${book.title}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {" "}
          {isOpen ? "-" : "+"}
        </button>
        <button
          class="btn btn-light"
          type="button"
          onClick={() => onDelete(book.title)}
        >
          Delete
        </button>
      </div>

      <BookTitle bookTitle={book.title} />
      {isOpen && <BookDetail book={book} />}
    </div>
  );
}

function BookDetail({ book }) {
  return (
    <div id={book.title}>
      <h3>{book.author}</h3>
      <h4>{book.year}</h4>
    </div>
  );
}

function BookTitle({ bookTitle }) {
  return <h2>{bookTitle}</h2>;
}
