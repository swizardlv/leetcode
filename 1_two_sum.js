/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length;
    var result;
    for (var i = 0; i < len; i++) {
        var _tmp = nums[i];
        //if (_tmp > target) continue;
        var _remain = target - _tmp;
        var _find = nums.indexOf(_remain,i+1);
        if (_find && _find > i) {
            result = [i, _find];
            break;
        }
    }
    return result;
};
