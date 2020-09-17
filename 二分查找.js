// 二分查找，在数组中查找指定的值
function binarySearch(arr, target) {
  var l = 0;
  var r = arr.length - 1;
  while (l <= r) {
    var mid = l + Math.ceil((r - l) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      l = mid + 1;
    }
    if (arr[mid] > target) {
      r = mid - 1;
    }
  }
  return -1;
}
