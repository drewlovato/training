/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [2,7,11,15]
const target = 9
const result = twoSum(nums, target)


var twoSum = function(nums, target) {
    nums = nums.map((v, i) => [i, v]);

    nums.sort((a, b) => a[1]- b[1]);

    let left = 0;
    let right = nums.length -  1;
    while(left < right) {
        const sum = nums[left][1] + nums[right][1];
        if (sum === target) {
            return [nums[left][0], nums[right][0]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return []; //If returned empty array no pair was found
};
// @lc code=end

