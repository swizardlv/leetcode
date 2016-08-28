/*

Given N axis-aligned rectangles where N > 0, determine if they all together form an exact cover of a rectangular region.

Each rectangle is represented as a bottom-left point and a top-right point. For example, a unit square is represented as [1,1,2,2]. (coordinate of bottom-left point is (1, 1) and top-right point is (2, 2)).


Example 1:

rectangles = [
  [1,1,3,3],
  [3,1,4,2],
  [3,2,4,4],
  [1,3,2,4],
  [2,3,3,4]
]

Return true. All 5 rectangles together form an exact cover of a rectangular region.

Example 2:

rectangles = [
  [1,1,2,3],
  [1,3,2,4],
  [3,1,4,2],
  [3,2,4,4]
]

Return false. Because there is a gap between the two rectangular regions.

Example 3:

rectangles = [
  [1,1,3,3],
  [3,1,4,2],
  [1,3,2,4],
  [3,2,4,4]
]

Return false. Because there is a gap in the top center.

Example 4:

rectangles = [
  [1,1,3,3],
  [3,1,4,2],
  [1,3,2,4],
  [2,2,4,4]
]

Return false. Because two of the rectangles overlap with each other.
 */

/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
    function calunits(rectangles) {
        return (rectangles[2] - rectangles[0]) * (rectangles[3] - rectangles[1]);
    }

    var startRect = rectangles[0];
    var bl = [startRect[0], startRect[1]];
    var tr = [startRect[2], startRect[3]];
    var sum1 = calunits(startRect);
    for (var i = 1; i < rectangles.length; i++) {
        var rect = rectangles[i];
        sum1 += calunits(rect);
        if (rect[0] < bl[0]) {
            bl[0] = rect[0];
        }

        if (rect[1] < bl[1]) {
            bl[1] = rect[1];
        }
        if (rect[2] > tr[0]) {
            tr[0] = rect[2];
        }
        if (rect[3] > tr[1]) {
            tr[1] = rect[3];
        }
    }
    return calunits([bl[0], bl[1], tr[0], tr[1]]) == sum1;




};
