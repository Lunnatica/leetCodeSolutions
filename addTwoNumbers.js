/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// https://leetcode.com/problems/add-two-numbers/

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 /**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let resultList = new ListNode()
    let current = resultList // current position in result list 
    let l1Current = l1 // current pos in l1
    let l2Current = l2 // current pos in l2
    let n1, n2, sum, carry = 0
    while (l1Current || l2Current) {
        n1 = l1Current ? l1Current.val : 0
        n2 = l2Current ? l2Current.val : 0
        sum = n1 + n2 + carry
        if(sum >= 10) {
            carry = 1 
            sum = sum - 10
        } // save carry
        else carry = 0
        // update value of current node of the result list
        current.val = sum
        // move positions to the next in resultList, l1 and l2
        if (l1Current) l1Current = l1Current.next
        if (l2Current) l2Current = l2Current.next
        if (l1Current || l2Current) { // if we are not on last element
             // create next node
            current.next = new ListNode()
            current = current.next
        }
    }
    if(carry) { // result has more digits than both lists
        current.next = new ListNode(carry)
    }
    return resultList
};