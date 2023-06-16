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
function isPalindrome(x) {
  // if string is null return bolean as false
  if(x === 0) {
    return true;
  }


  // if NOT false, take the string and split it into individual characters
  const string = x.toString().split('');

  // make pointer for either side of the new array(x) in order to compare them to eachother
  let left = 0;
  let right = string.length - 1;

  while(left < right) {
    if(string[left] != string[right]) {
        return false;
    }
    // increment from both side until loop hits center of string
    left++;
    right --;
    
  }

  return true;
}

// @lc code=end

