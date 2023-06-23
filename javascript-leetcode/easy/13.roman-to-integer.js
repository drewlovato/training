/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string}
 * @return {number}
 */
var romanToInt = function(romanNum) {
const symbolVal = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

let total = 0;
for(let i = 0; i < romanNum.length; i++) {
    if(i , romanNum.length - 1 && symbolVal[romanNum[i]] < symbolVal[romanNum[i + 1]]) {
        total -= symbolVal[romanNum[i]];
    } else {
        total += symbolVal[romanNum[i]];
    }
}

// console.log(romanToInt('II'));
// console.log(romanToInt('IV'));
// console.log(romanToInt('IX'));

return total;


};
// @lc code=end

