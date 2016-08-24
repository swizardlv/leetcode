/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.


 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var len = s.length;
    var cache={};
    for (var i = 0; i < len; i++) {
        var char = s[i];
        if (cache[char]) {
          continue;
        }
        cache[char]=1;
        var _index = s.indexOf(char, i+1);
        if (_index == -1) {
            return i;
        }
    }
    return -1;
};
