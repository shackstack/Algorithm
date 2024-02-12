/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
    return nums.map(v => v ** 2).sort((a,b) => a - b);
};