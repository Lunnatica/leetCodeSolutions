// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Given a sorted array nums, remove the duplicates in-place such that 
// each element appear only once and return the new length.

// Do not allocate extra space for another array, 
// you must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let length = 0
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[length]) {
            length++
            nums[length] = nums[i]
        }
    }     
    return length + 1
}