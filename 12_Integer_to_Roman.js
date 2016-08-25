/*
Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.

 */

 /**
  * @param {number} num
  * @return {string}
  */
 var intToRoman = function(num) {
   var nums = [
       ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
       ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
       ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
       ["", "M", "MM", "MMM"]
   ];

   var roman="";
   roman+=nums[3][Math.floor(num/1000)%10];
   roman+=nums[2][Math.floor(num/100)%10];
   roman+=nums[1][Math.floor(num/10)%10];
   roman+=nums[0][num%10];
   return roman;
 };
