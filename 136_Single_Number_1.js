/*

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var cache = {};
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        var _tmp = nums[i];
        if (cache[_tmp]) {
            sum -= _tmp;
        } else {
            sum += _tmp;
            cache[_tmp] = 1;
        }
    }
    return sum;
};
