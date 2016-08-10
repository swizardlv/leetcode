/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?


*/
function addDigit(num) {
    var _return = num % 9;
    if (_return === 0 && num>0)
        _return = 9;
    return _return;
}
