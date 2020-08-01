// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false
// 说明:
// 你可以假设字符串只包含小写字母。

// 进阶:
// 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-anagram
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 使用哈希表
// 新建一个数组，然后分别遍历字符串，把对应的字母进行计数；
// 遍历第一个字符串执行加操作，遍历第二个字符串执行减操作。如果出现某个字母计数小于0，则说明不符合要求
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let list = new Array(26);
  for (item of s) {
    let index = item.toLowerCase().charCodeAt() - 97;
    list[index] ? (list[index] += 1) : (list[index] = 1);
  }
  for (item of t) {
    let index = item.toLowerCase().charCodeAt() - 97;
    list[index] ? (list[index] -= 1) : (list[index] = -1);
    if (list[index] < 0) {
      return false;
    }
  }
  return true;
};

// 复杂度分析
// 时间复杂度：O(n)O(n)。时间复杂度为 O(n)O(n) 因为访问计数器表是一个固定的时间操作。
// 空间复杂度：O(1)O(1)。尽管我们使用了额外的空间，但是空间的复杂性是 O(1)O(1)，因为无论 NN 有多大，表的大小都保持不变。
