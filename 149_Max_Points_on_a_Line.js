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
        var max = 2;
        for (var i = 0; i < pointsLength; i++) {
            var firstPoint = points[i];
            var rateObj = {};
            var samePoint = 0;
            var maxRate = 0;
            for (var j = 0; j < pointsLength; j++) {
                if (i != j) {
                    var secondPoint = points[j];
                    var rate;
                    if (secondPoint.x == firstPoint.x) {
                        if (secondPoint.y == firstPoint.y) {
                            samePoint++;
                            continue;
                        } else {
                            rate = 999;
                        }
                    } else {
                        rate = (secondPoint.y - firstPoint.y) / (secondPoint.x - firstPoint.x);
                    }
                    if (rateObj[rate]) {
                        rateObj[rate]++;
                    } else {
                        rateObj[rate] = 1;
                    }

                    if (rateObj[rate] > maxRate) {
                        maxRate = rateObj[rate];
                    }
                }

            }
            if (maxRate + samePoint + 1 > max) {
                max = maxRate + samePoint + 1;
            }
        }
        return max;
    }
};
