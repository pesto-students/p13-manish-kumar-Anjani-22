// CommentList.js
import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments, onCommentSubmit }) => {
  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onCommentSubmit={onCommentSubmit}
        />
      ))}
    </ul>
  );
};

export default CommentList;
