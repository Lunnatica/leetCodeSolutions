// https://leetcode.com/problems/two-sum/

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) { // "brute force" method
//     for(let x = 0; x < nums.length; x++) {
//         let diff = target - nums[x]
//        // if(nums[x] != diff)
//         let indexOtherPair = nums.indexOf(diff)
//         if(indexOtherPair != -1 && x != indexOtherPair) return [x,indexOtherPair]
//     }
// };

var twoSum = function(nums, target) { // one pass hash table method
    let hashTable = {}
    let value = 0
    let complement = 0
    for(let x = 0; x < nums.length; x++) { // create "hash table" 
        value = nums[x]
        // uses value as index and stores its occurrences ([] for duplicates)
        complement = target - value
        if(complement in hashTable) return [hashTable[complement][0],x]
        hashTable[value] = [x] 
    }
}
