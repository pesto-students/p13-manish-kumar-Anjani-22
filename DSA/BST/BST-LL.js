function bst_toLinkedList(BSTNode, LL) {
  //LLNode null
  if (!BSTNode.left && !BSTNode.right) return BSTNode.value;
  if (!BSTNode.left) LL.insert(BSTNode.value);
  else {
    leftValue = bst_toLinkedList(BSTNode);

    LL.insert(leftValue);
    LL.insert(BSTNode.value);
  }
  rightValue = bst_toLinkedList(BSTNode.right, LL);
  if (!rightValue) LL.insert(rightValue);
}
