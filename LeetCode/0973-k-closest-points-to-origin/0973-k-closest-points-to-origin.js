/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = (points, k) => {
    points.sort((a,b)=> getDistance(a) - getDistance(b))
    return points.slice(0,k)
};

const getDistance = (point) => {
    return Math.sqrt(point[0]**2 + point[1]**2)
}