/*
Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.
 */

/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
    var pointsLength = points.length;
    if (pointsLength < 3) {
        return pointsLength;
    } else {
        for (var i = 0; i < pointsLength - 2; i++) {

            var firstPoint = points[i];
            for (var j = i + 1; i < pointsLength - 1; j++) {
                var secondPoint = points[j];
                for (var k = j + 1; i < pointsLength; k++) {
                    var thirdPoint = points[i];

                }
            }
        }
    }
};
