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

function twoSum (nums, target) {
    const suitMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const suit = target - num;

        if (suitMap.has(num)) {
            return [suitMap.get(num), i];
        }

        suitMap.set(suit, i)
    }

    return [];
};
// @lc code=end








