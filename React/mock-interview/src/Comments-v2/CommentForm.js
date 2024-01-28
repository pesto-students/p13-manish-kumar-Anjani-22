// CommentForm.js
import React, { useState } from "react";

const CommentForm = ({ parentId, onCommentSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim() === "") {
      alert("Please enter a valid comment.");
      return;
    }

    const newComment = {
      id: Date.now(),
      text,
      replies: [],
    };

    onCommentSubmit(newComment, parentId);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <label>
        Add a Reply:
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
