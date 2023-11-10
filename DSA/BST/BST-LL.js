function bst_toLinkedList(BSTNode, LL) {
  //LLNode null
  if (!BSTNode) return;
  if (!BSTNode.left) bst_toLinkedList(BSTNode.left, LL);
  LL.insert(BSTNode.value);
  if (!BSTNode.left) bst_toLinkedList(BSTNode.right, LL);
}

/*******************************
 *******************************/
if (!BSTNode.left && !BSTNode.right) return BSTNode.value;
if (!BSTNode.left) {
  LL.insert(BSTNode.value);
  bst_toLinkedList(BSTNode.right, LL);
  return bst_toLinkedList(BSTNode.right, LL);
} else {
  leftValue = bst_toLinkedList(BSTNode);
  LL.insert(leftValue);

  LL.insert(BSTNode.value);

  rightValue = bst_toLinkedList(BSTNode.right, LL);
  LL.insert(rightValue);
  if (!rightValue) LL.insert(rightValue);
}
