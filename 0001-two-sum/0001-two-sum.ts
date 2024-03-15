function twoSum(nums: number[], target: number): number[] {
    const result = [];
    const hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(target - nums[i])) {
            result.push(hashMap.get(target - nums[i]));
            result.push(i);
            break;
        };
        if (!hashMap.has(nums[i])) {
            hashMap.set(nums[i], i);
        };
    }

    return result;
};