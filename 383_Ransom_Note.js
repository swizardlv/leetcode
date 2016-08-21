/*

Given
 an
arbitrary
 ransom
 note
 string
and
another
string
containing
letters from
 all
the
magazines,
 write
a
function
that
will
return
true
if
the
ransom
 note
can
be
constructed
from
the
magazines ;
otherwise,
it
will
return
false.



Each
letter
 in
 the
 magazine
string
can
 only
be
 used
once
 in
 your
ransom
 note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var len = ransomNote.length;
    var cache = {};
    for (var i = 0; i < len; i++) {
        var _char = ransomNote[i];
        var _lastIndex = cache[_char];
        if (_lastIndex>-1) {
            _lastIndex = magazine.indexOf( _char,_lastIndex + 1);
        } else {
            _lastIndex = magazine.indexOf( _char);
        }

        if (_lastIndex > -1) {
            cache[_char] = _lastIndex;
            continue;
        } else {
            return false;
        }
    }
    return true;
};
