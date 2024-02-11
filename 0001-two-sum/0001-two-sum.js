/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = []
    for(let i=0; i<nums.length; i++) {
        const targetIndex = nums.findIndex((v,index) => i!==index && v===target-nums[i]);
        if(targetIndex!==-1){
            result.push(i);
            result.push(targetIndex);
            break;
        }
    }

    return result
};