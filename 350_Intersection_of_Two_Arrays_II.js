/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var len1 = nums1.length;
    var len2 = nums2.length;
    var array1;
    var array2;
    var alen1;
    var alen2;
    if (len1 < len2) {
        array1 = nums1;
        alen1 = len1;
        array2 = nums2;
        alen2 = len2;
    } else {
        array1 = nums2;
        alen1 = len2;
        array2 = nums1;
        alen2 = len1;
    }
    var result = [];
    var cache = {};
    var ignore = {};
    for (var i = 0; i < alen1; i++) {
        var num = array1[i];
        if (ignore[num]) { //if no in last check, continue
            continue;
        }
        var lastindex = cache[num]; // check if exist last time
        var _index;
        if (lastindex > -1) {
            _index = array2.indexOf(num, lastindex + 1); //start from last time
        } else {
            _index = array2.indexOf(num);
        }
        if (_index == -1) { // if none this time, will ignore in future
            ignore[num] = 1;
        } else {
            cache[num] = _index;
            result.push(num);
        }
    }
    return result;
};
