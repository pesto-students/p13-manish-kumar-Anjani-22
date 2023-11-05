function bst_toLinkedList(BSTNode, LLnode) {
  //LLNode null
  if (!BSTNode.left && !BSTNode.right) return BSTNode;
  left = bst_toLinkedList(BSTNode);

  if (!LLnode) LLnode = left;LLnode.next = BSTNode
  else LLnode.next = left;

  LLnode.next = BSTNode;
  bst_toLinkedList(BSTNode);
}
