/*Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // var numbers = {
    //     "I": 1,
    //     "V": 5,
    //     "X": 10,
    //     "L": 50,
    //     "C": 100,
    //     "D": 500,
    //     "M": 1000
    // };

    var num = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"]
    ];
    var lastIndex = 0;
    var sum = 0;
    for (var i = 3; i > -1; i--) {
        var array = num[i];
        var len = array.length;
        for (var j = len - 1; j > 0; j--) {
            var tmp = array[j];

            var _index = s.indexOf(tmp, lastIndex);
            if (_index ===lastIndex) {
                var _len = tmp.length;
                lastIndex += _len;
                sum += j * Math.pow(10, i);
                break;
            }

        }
    }
    return sum;
};
