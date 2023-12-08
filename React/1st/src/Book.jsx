import React, { useEffect, useState } from "react";
import BookDetail from "./BookDetail";

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
          id="deleteBtn"
          class="btn btn-light"
          type="button"
          onClick={() => onDelete(book.title)}
        >
          ❌ Delete
        </button>
      </div>

      <BookTitle bookTitle={book.title} />
      {isOpen && <BookDetail book={book} />}
    </div>
  );
}

function BookTitle({ bookTitle }) {
  return <h2>{bookTitle}</h2>;
}
