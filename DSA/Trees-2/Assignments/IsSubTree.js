function isSubTree(mainTreeRootNode, subTreeRootNode) {
  return identical(mainTreeRootNode, subTreeRootNode);
  //   let left = isSubTree(mainTreeRootNode.left, subTreeRootNode);
  //   let right = isSubTree(mainTreeRootNode.right, subTreeRootNode)
}
function identical(mainTreeRootNode, subTreeRootNode) {
  if (!subTreeRootNode && !mainTreeRootNode) {
    return true;
  }

  if (!mainTreeRootNode) return;

  if (mainTreeRootNode.value === subTreeRootNode.value) {
    return (
      mainTreeRootNode.value === subTreeRootNode.value &&
      identical(mainTreeRootNode.left, subTreeRootNode.left) &&
      identical(mainTreeRootNode.right, subTreeRootNode.right)
    );
  }
  identical(mainTreeRootNode.left, subTreeRootNode);
  identical(mainTreeRootNode.right, subTreeRootNode);
}
