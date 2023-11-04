function ifArrMinHeap(arr, p = 0) {
  if (arr.length <= 1) return true;

  l = 2 * p + 1;
  r = 2 * p + 2;

  if (arr[i] > arr[l] || arr[i] > arr[r]) return false;

  return ifArrMinHeap(arr, l) && ifArrMinHeap(arr, r);
}
