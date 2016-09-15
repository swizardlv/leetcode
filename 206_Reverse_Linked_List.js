/*
Reverse a singly linked list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    var _head = head; // define head pointer
    var _newhead;
    while (_head.next) {
      if (!_newhead) {
        _newhead=_head;
      }
        var tmp = _head;
        _head = head.

    }
};
