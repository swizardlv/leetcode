/*
Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var _s = [];
    var len=s.length;
    for (var i = len; i >=0; i--) {
        _s[len-i]=s[i];
    }
    return _s.join('');
};
