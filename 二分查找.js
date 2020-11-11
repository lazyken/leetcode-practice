// 二分查找，在数组中查找指定的值
function binarySearch(arr, target) {
  var l = 0;
  var r = arr.length - 1;
  // 在[l...r]的范围里寻找target
  while (l <= r) {
    // 当l=== r时，区间[l...r]依然是有效的

    // var mid = Math.ceil((l + r) / 2);
    // 当l和r足够大时，l+r的值可能会整型溢出，可以使用减法
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
