import { useState } from "react";

function CommentForm({ cmtLL }) {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState(false);
  const [replyInput, setReplyInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    cmtLL.append(input);
  }

  function addReply() {
    cmtLL.append(replyInput);
  }
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
      {cmtLL.head && <button onClick={() => setReply(true)}>reply</button>}
      {reply && (
        <div>
          <input
            type="text"
            value={replyInput}
            onChange={(e) => setReplyInput(e.target.value)}
          ></input>
          <button onClick={addReply}>AddReply</button>{" "}
        </div>
      )}
    </div>
  );
}

export default CommentForm;
