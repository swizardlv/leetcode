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
        for (var i = 0; i < pointsLength - 2; i++) {
            var firstPoint = points[i];
            var rateObj = {};
            for (var j = i + 1; j < pointsLength - 1; j++) {
                var secondPoint = points[j];
                var count = 2;
                var rate;
                if (secondPoint.x == firstPoint.x) {
                    if (secondPoint.y == firstPoint.y) {
                        count++;
                        rate = 1000;
                        if (count > max) {
                            max = count;

                        }
                        continue;
                    } else {
                        rate = 999;
                    }

                } else {
                    rate = (secondPoint.y - firstPoint.y) / (secondPoint.x - firstPoint.x);
                }
                if (rateObj[rate]) {
                    continue;
                } else {
                    rateObj[rate] = true;
                }
                for (var k = j + 1; k < pointsLength; k++) {
                    var thirdPoint = points[k];
                    var rate1;
                    if (thirdPoint.x == firstPoint.x) {
                        if (thirdPoint.y == firstPoint.y) {

                            count++;
                            if (count > max) {
                                max = count;

                            }
                            continue;
                        } else {
                            rate1 = 999;
                        }

                    } else {
                        rate1 = (thirdPoint.y - firstPoint.y) / (thirdPoint.x - firstPoint.x);
                    }
                    if (rate1 == rate) {
                        count++;
                        if (count > max) {
                            max = count;
                        }
                    }
                }
            }
        }
        return max;
    }
};
