/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    // a set to check whether it has unique character in the sliding window
    const charSet = new Set();
    // the left position of the sliding window
    let l = 0;
    let res = 0;

    for (let r = 0; r < s.length; i += 1) {
        // if the new character exist in the charSet, it will be removed
        // until the charSet has ditinct characters
        while(charSet.has(s[r])) {
            charSet.delete(s[l]);
            l += 1;
        }

        // After removing the repeating character, add this character to the charSet
        charSet.add(s[r]);
        // Get the maximum length
        res = Math.max(res, r - l + 1);
    }

    return res;
}