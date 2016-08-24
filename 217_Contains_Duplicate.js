/*
Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var len = nums.length;
    var cache = {};
    for (var i = 0; i < len; i++) {
        var num = nums[i];
        if (cache[num]) {
            return true;
        } else {
            cache[num] = 1;
        }
    }
    return false;
};
