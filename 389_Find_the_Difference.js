/*

Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter at a random position.

Find the letter that was added in t.

Example:

Input:
s = "abcd"
t = "abcde"

Output:
e

Explanation:
'e' is the letter that was added.

 */

 /**
  * @param {string} s
  * @param {string} t
  * @return {character}
  */
 var findTheDifference = function(s, t) {
     var cache={};
     for (var i = 0; i < t.length; i++) {
       var _tmp=t[i];
       var lastIndex=cache[_tmp]>-1?cache[_tmp]+1:0;

       var _index=s.indexOf(t[i],lastIndex);
       if (_index==-1) {
         return _tmp;
       }else {
         cache[_tmp]=_index;
       }
     }
 };