function findPeak(arr, left, right) {
  if (left > right) return;
  const mid = Math.floor(left + (right - left / 2));

  if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return mid;
  else if (mid === arr.lenghth) return mid;
  else if (arr[mid] < arr[mid + 1]) {
    findPeak(arr, mid + 1, right);
  } else {
    findPeak(arr, left, mid - 1);
  }
}
