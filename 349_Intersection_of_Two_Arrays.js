/*Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var _return = [];

    function _intersection(_nums1, _nums2) {
        var _len = _nums1.length;
        for (var i = 0; i < _len; i++) {
            var _tmp = _nums1[i];
            if (_return.indexOf(_tmp) == -1 && _nums2.indexOf(_tmp) > -1) {
                _return.push(_tmp);
            }
        }
    }

    var len1 = nums1.length;
    var len2 = nums2.length;
    if (len2 > len1) {
        _intersection(nums1, nums2);
    } else {
        _intersection(nums2, nums1);
    }
    return _return;
};
