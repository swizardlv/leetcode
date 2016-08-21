/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var len = nums.length;
    var _count = 0;
    for (var i = 0; i < len; i++) {
        var _number = nums[i];
        if (_number === 0) {
            _count++;
            continue;
        }
        if (_count > 0) {
            var _tmp = nums[i - _count];
            nums[i - _count] = _number;
            nums[i] = _tmp;
        }
    }
};
