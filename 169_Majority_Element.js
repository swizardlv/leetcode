/*

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var len = nums.length;
    var countObj = {};
    for (var i = 0; i < len; i++) {
        var num = nums[i];

        countObj[num] = countObj[num] ? countObj[num] + 1 : 1;
        if (countObj[num] > len / 2) {
            return num;
        }

    }
    return null;
};
