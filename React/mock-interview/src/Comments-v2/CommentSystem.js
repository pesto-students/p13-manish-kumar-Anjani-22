// App.js
import React, { useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import "./Comment.css";

const CommentSystem = () => {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (newComment, parentId) => {
    if (parentId) {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === parentId
            ? { ...comment, replies: [...comment.replies, newComment] }
            : comment
        )
      );
    } else {
      setComments((prevComments) => [...prevComments, newComment]);
    }
  };

  return (
    <div className="container">
      <h1>Comment System</h1>
      <CommentList comments={comments} onCommentSubmit={handleCommentSubmit} />
      <CommentForm onCommentSubmit={handleCommentSubmit} />
    </div>
  );
};

export default CommentSystem;
