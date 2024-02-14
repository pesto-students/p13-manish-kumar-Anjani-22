// Comment.js
import React, { useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const Comment = ({ comment, onCommentSubmit }) => {
  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div className="comment-container">
      <p>{comment.text}</p>
      <button onClick={toggleReplies}>
        {showReplies ? "Hide Replies" : "Show Replies"}
      </button>

      {showReplies && (
        <>
          <CommentList
            comments={comment.replies}
            onCommentSubmit={onCommentSubmit}
          />
          <CommentForm
            parentId={comment.id}
            onCommentSubmit={onCommentSubmit}
          />
        </>
      )}
    </div>
  );
};

export default Comment;
