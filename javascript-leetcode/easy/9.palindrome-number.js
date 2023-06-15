/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // x.map((v, i) => [i, v])

    x.sort((a,b) => a[1] - b[1]);

    let left = 0;
    let right = x.length - 1;
    while (left != right) {
        return "This is not a palandrome";
    } if (left = right ) {
        left++
    } if (right = left) {
        right--
    }
    return "This is a palandrome"

};
// @lc code=end

