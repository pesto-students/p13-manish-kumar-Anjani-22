import { useState } from "react";

export default function BookForm({ addBook }) {
  const [year, setYear] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const book = {
    title: title,
    author: author,
    year: year,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(book);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          className="form-control"
          id="author"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label htmlFor="year">Select Year:</label>
        <input
          type="number"
          placeholder="YYYY"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          min="1000" // Set the minimum allowed year
          max="2100" // Set the maximum allowed year
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
