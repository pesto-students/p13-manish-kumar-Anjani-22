function symmetry(node) {
  if (!node.left && node.right) return false;
  if (node.left && !node.right) return false;


  if (!node.left && !node.right) return true;

  let left = node.left;
  let right = node.right;
  return left.value === right.value && identical(left, right);
}
//identical

                    1
            2               2
        4       5        4      5    
     8     9      10  11    8   9  10  11

///////////////////
            1 (0)
     20 (1)              30 (2)
 40(3)      50(4)    60(6)      70(6)  

 [10,20,30,40,50,60]
  0, 1, 2, 3, 4, 5

  //////////////////////////