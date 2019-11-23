/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let mergedList = new ListNode()
    let currMergedList = mergedList
    let currL1 = l1
    let currL2 = l2
    
    if (!l1 || !l2)  {
        return l1 ? l1 : l2
    }
    while(currL1 && currL2) {
        if(currMergedList.val != undefined) {
            currMergedList.next = new ListNode()
            currMergedList = currMergedList.next
        }
        if(currL1.val <= currL2.val) {
            currMergedList.val = currL1.val
            currL1 = currL1.next
        }
        else { // l2 item is next  
            currMergedList.val = currL2.val
            currL2 = currL2.next
        }
    }
    if (currL1 || currL2) { // if any element left in any of the lists
        currL1 ? currMergedList.next = currL1 : currMergedList.next = currL2
    }
    return mergedList
};