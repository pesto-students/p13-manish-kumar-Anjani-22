import React, { useState } from "react";

export default function Book({ book }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        class="btn btn-primary"
        type="button"
        data-toggle="collapse"
        data-target="#multiCollapseExample2"
        aria-expanded="false"
        aria-controls={book.title}
        onClick={setIsOpen((isOpen) => !isOpen)}
      >
        {isOpen ? "-" : "+"}
      </button>

      <BookTitle bookTitle={book.title} />
      <BookDetail book={book} />
    </div>
  );
}

function BookDetail({ book }) {
  return (
    <div id={book.title}>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <h4>{book.year}</h4>
    </div>
  );
}

function BookTitle({ bookTitle }) {
  return <h2>{bookTitle}</h2>;
}
