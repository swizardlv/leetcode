/*
Validate if a given string is numeric.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.

Subscribe to see which companies asked this question

*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var transitionTable = [
        [-1, 0, 3, 1, 2, -1],
        [-1, 8, -1, 1, 4, 5],
        [-1, -1, -1, 4, -1, -1],
        [-1, -1, -1, 1, 2, -1],
        [-1, 8, -1, 4, -1, 5],
        [-1, -1, 6, 7, -1, -1],
        [-1, -1, -1, 7, -1, -1],
        [-1, 8, -1, 7, -1, -1],
        [-1, 8, -1, -1, -1, -1]
    ];

    var i = 0,
        inputStr, state = 0;
    while (s[i]) {
        if (s[i] == ' ') {
            inputStr = 1;
        } else if (s[i] == '+' || s[i] == '-') {
            inputStr = 2;
        } else if (s[i] in nums) {
            inputStr = 3;
        } else if (s[i] == '.') {
            inputStr = 4;
        } else if (s[i] == 'e') {
            inputStr = 5;
        } else {
            inputStr = 0;
        }
        state = transitionTable[state][inputStr];
        if (state==-1) {
          return false;
        }else {
          i++;
        }

    }
    return state == 1 || state == 4 || state == 7 || state == 8;


};
