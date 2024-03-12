/**
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = (nums) => {
    const dp = {};

    for (let i = 0; i < nums.length; i++) {
        if (dp[nums[i]]) continue;
        dp[nums[i]] = nums.reduce((a, b, index) => {
            if (i === index) return a;
            return a * b;
        }, 1);
    };
    return nums.map((num) => dp[num]);
};