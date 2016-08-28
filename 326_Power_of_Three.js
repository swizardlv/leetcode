/*


Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 0) {
        return false;
    }
    return Math.floor(Math.log10(n) / Math.log10(3)) - Math.log10(n) / Math.log10(3) === 0;
};
