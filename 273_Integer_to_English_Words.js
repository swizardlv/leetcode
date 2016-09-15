/*
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

For example,
123 -> "One Hundred Twenty Three"
12345 -> "Twelve Thousand Three Hundred Forty Five"
1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 */

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    var lookuptable1 = {
        "000":"",
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nighteen",
        "20": "twenty",
        "30": "thirty",
        "40": "fourty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "nighty"

    };
    var lookuptable2 = {
        "3": "thousand",
        "6": "million",
        "9": "billion"
    };
    var numstr = num + "";
    var checkednumber = check(numstr);
    var j=0;
    if (checkednumber) {
        return checkednumber;
    } else {
        var len = numstr.length;
        var _result="";
        var steps=Math.floor(len/3)+1;
        for (var i = 1; i < steps ; i++) {
          var startIndex=len-i*3;
          var _tmp;
          if (startIndex>=0) {
            _tmp=numstr.substr(startIndex,3);
          }else {
            _tmp=numstr.substr(0,startIndex+3);
          }
        }
    }

    function check(nubmer) {
        return lookuptable1[twonums];
    }

    function prounceThree(threedigits) {

    }

    function prounceTwo(twodigits) {
        if (nums[twonums]) {
            return nums[twonums];
        } else {

        }
    }
};
