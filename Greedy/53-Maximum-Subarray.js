/**
 * @param {number[]} nums
 * @return {number}
 * Time complexity O(n^2), Space complexity O(1)
 */
var maxSubArray = function(nums) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currSum = 0;

    for (let i = 0; i < nums.length; i += 1) {
        for (let j = i; j < nums.length; j += 1) {
            currSum += nums[j];
            maxSum = Math.max(maxSum, currSum);
        }

        currSum = 0;
    }

    return maxSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 * Divide and Conquer
 * Time complexity O(nlogn), Space complexity O(1)
 */
var maxSubArray = function(nums, left = 0, right = nums.length - 1) {
    const isBaseCase = (right < left)
    if (isBaseCase) return -Infinity;

    const mid = (left + right) >> 1;
    const guess = nums[mid];
    const leftSum = getLeftSumFromMid(nums, mid, left)
    const rightSum = getRightSumFromMid(nums, mid, right)
    const sum = guess + leftSum + rightSum;
    
    const leftHalf = maxSubArray(nums, left, (mid - 1));
    const rightHalf = maxSubArray(nums, (mid + 1), right);

    return Math.max(sum, leftHalf, rightHalf);
}

const getLeftSumFromMid = (nums, mid, left, sum = 0, maxSum = 0) => {
    for (let i = (mid - 1); left <= i; i--) {
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);
    }
    
    return maxSum;
}

const getRightSumFromMid = (nums, mid, right, sum = 0, maxSum = 0) => {
    for (let i = (mid + 1); i <= right; i++) {
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);
    }
    
    return maxSum;
}


/**
 * @param {number[]} nums
 * @return {number}
 * Time complexity O(n), Space complexity O(1)
 */
var maxSubArray = function(nums) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currSum = 0;

    for (let i = 0; i < nums.length; i += 1) {
        currSum += nums[i];

        maxSum = Math.max(maxSum, currSum);
        if (currSum < 0) {
            currSum = 0;
        }
    }

    return maxSum;
};