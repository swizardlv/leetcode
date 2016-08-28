/*
Given an integer, write a function to determine if it is a power of two.
 */

var isPowerOfTwo = function(n) {
    if (n === 0) {
        return false;
    }
    if (n === 1) {
        return true;
    }
    if (n == 2) {
        return true;
    }
    if (n % 2 == 1) {
        return false;
    } else return isPowerOfTwo(n / 2);
};
