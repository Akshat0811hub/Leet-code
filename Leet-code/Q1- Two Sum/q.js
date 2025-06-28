/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const numMap = {}; //value store krne ke liye

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (complement in numMap) {
            return [numMap[complement], i];
        }
    // number ko store krne ke liye index ke saath
        numMap[nums[i]] = i;
    }
}