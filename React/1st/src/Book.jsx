import React from "react";

export default function Book({ book }) {
  return (
    <div>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <h4>{book.year}</h4>
    </div>
  );
}
