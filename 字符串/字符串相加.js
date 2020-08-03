// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

// 注意：

// num1 和num2 的长度都小于 5100.
// num1 和num2 都只包含数字 0-9.
// num1 和num2 都不包含任何前导零。
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-strings
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var addStrings = function (num1, num2) {
  var a = num1.length;
  var b = num2.length;
  var max = a > b ? a : b;
  var sum = '';
  var add = 0;
  for (var i = 0; i < max; i++) {
    var valueA = num1[a - 1 - i] || 0;
    var valueB = num2[b - 1 - i] || 0;
    var currentValue = valueA * 1 + valueB * 1 + add;
    if (currentValue >= 10) {
      sum = currentValue - 10 + sum;
      add = 1;
    } else {
      sum = currentValue + sum;
      add = 0;
    }
  }
  if (add) {
    sum = add + sum;
  }
  return sum;
};

// 官方题解：
// var addStrings = function(num1, num2) {
//   let i = num1.length - 1, j = num2.length - 1, add = 0;
//   const ans = [];
//   while (i >= 0 || j >= 0 || add != 0) {
//       const x = i >= 0 ? num1.charAt(i) - '0' : 0;
//       const y = j >= 0 ? num2.charAt(j) - '0' : 0;
//       const result = x + y + add;
//       ans.push(result % 10);
//       add = Math.floor(result / 10);
//       i -= 1;
//       j -= 1;
//   }
//   return ans.reverse().join('');
// };
