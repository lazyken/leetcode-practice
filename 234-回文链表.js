// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false
// 示例 2:

// 输入: 1->2->2->1
// 输出: true
// 进阶：
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/palindrome-linked-list
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// ---------------------------------------------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) {
    return true;
  }
  // 方法一：
  // let valueList = [];
  // // 递归并不是最好的方法，某些情况下存在爆栈的风险
  // // function getNextVal(data) {
  // //   if (data.val + '') {
  // //     valueList.push(data.val);
  // //   }
  // //   if (data.next) {
  // //     getNextVal(data.next);
  // //   }
  // // }
  // // getNextVal(head);
  // // 使用循环
  // let currentNode = head;
  // while (currentNode) {
  //   valueList.push(currentNode.val);
  //   currentNode = currentNode.next;
  // }
  // for (let i = 0; i < Math.floor(valueList.length / 2); i++) {
  //   if (valueList[i] !== valueList[valueList.length - 1 - i]) {
  //     return false;
  //   }
  // }
  // return true;

  // // 方法二：递归
  // function recursivelyCheck(currentNode) {
  //   if (currentNode != null) {
  //     // if (!recursivelyCheck(currentNode.next))拿到的是下一个节点与下一个节点的前置节点是否是回文的判断结果，
  //     // 如果不相等，即不是回文，return false 给上一节点进行判断，一旦 return false ，递归返回时就会一直 return false 了
  //     if (!recursivelyCheck(currentNode.next)) return false;
  //     // 判断当前节点与其对应的前置节点的 val 是否相等，如果不相等，即不是回文， return false 给上一节点进行判断
  //     if (currentNode.val != frontPointer.val) return false;
  //     // 当前节点符合回文条件，则 frontPointer 指针向下一个节点移动
  //     frontPointer = frontPointer.next;
  //   }
  //   // 该层递归判断当前节点与其对应的前置节点符合回文条件，返回true
  //   return true;
  // }
  // let frontPointer = head;
  // return recursivelyCheck(head);

  // 方法三：对半反转然后比较
  // 利用快慢双指针找到前半截链表的中间节点
  function EndOfFirstHalf(head) {
    let fast = head;
    let slow = head;
    while (!!fast.next && !!fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
  // 反转链表
  function reverseList(ListNode) {
    let prev = null;
    let curr = ListNode;
    while (curr != null) {
      let nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }
    return prev;
  }
  // 取出前后两截链表进行比较
  let firstHalfEnd = EndOfFirstHalf(head);
  let secondHalf = reverseList(firstHalfEnd.next);

  let p1 = head;
  let p2 = secondHalf;
  let result = true;
  while (result && p2 != null) {
    if (p1.val !== p2.val) result = false;
    p1 = p1.next;
    p2 = p2.next;
  }
  // 还原原始链表
  firstHalfEnd.next = reverseList(secondHalf);
  return result;
};
