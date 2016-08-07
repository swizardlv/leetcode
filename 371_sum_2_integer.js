/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.

*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    var _result = a ^ b;
    var _carry = (a & b) << 1;
    if (_carry !== 0) {
        _result = getSum(_result, _carry);

    }
    return _result;
};
