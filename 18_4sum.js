/*
Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note: The solution set must not contain duplicate quadruplets.

For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]


*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var len = nums.length;
    if (len < 4) {
        return [];
    }
    var result = [];


    for (var i = 0; i < len - 3; i++) { //step 1


        for (var j = i + 1; j < len - 2; j++) { //step2


            for (var k = j + 1; k < len - 1; k++) { //step3

                for (var l = k + 1; l < len; l++) { //step4
                    if (nums[i] + nums[j] + nums[k] + nums[l] == target) {
                        var _temp = [nums[i], nums[j], nums[k], nums[l]];
                        var _len = result.length;
                        var _exists = false;
                        for (var m = 0; m < _len; m++) {
                            if (arraysEqual(result[m], _temp)) {
                                _exists = true;
                                break;
                            }
                        }
                        if (!_exists) {
                            result.push(_temp);
                        }

                    }
                }
            }

        }

    }
    return result;


    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        var _alen = a.length;
        var _blen = b.length;
        if (_alen != _blen) return false;

        // If you don't care about the order of the elements inside
        // the array, you should sort both arrays here.

        for (var i = 0; i < _alen; ++i) {
            if (b.indexOf(a[i]) == -1) return false;
        }
        for (var j = 0; j < _blen; ++j) {
            if (a.indexOf(b[j]) == -1) return false;
        }
        return true;
    }
};
