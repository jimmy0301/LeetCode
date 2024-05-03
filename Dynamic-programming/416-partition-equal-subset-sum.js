// Leetcode Medium
// 跟 0/1 背包問題一樣
// for (x : nums) 遍歷物品
//     for (s = 0; s <= x; s += 1) 遍歷容量
// if (dp[s - x]) {
//     dp[s] = true
// }
// dp[0] = true => 代表背包什麼都不裝，也就是 sum = 0 的時候，就空字串，一定可以組出所以一定是 true
// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.


const canPartition = (nums) => {
    let totalSum = 0;

    for (let i = 0; i < nums.length; i += 1) {
        totalSum += nums[i];
    }

    if (totalSum % 2 !== 0) {
        return false;
    }

    const target = totalSum / 2;
    const dp = Array(target + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < nums.length; i += 1) {
        const x = nums[i];
        const dp2 = Array.from(dp);
        for (let s = 0; s <= target; s += 1) {
            if (dp2[s - x]) {
                dp[s] = true;
            }
        }
    }

    return dp[target];
}