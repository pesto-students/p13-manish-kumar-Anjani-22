import CommentForm from "./CommentForm";

import LinkedList from "./CommnetLL";
const cmtLL = new LinkedList();

function CommentBox() {
  return (
    <div>
      <CommentForm cmtLL={cmtLL} />
    </div>
  );
}

export default CommentBox;
