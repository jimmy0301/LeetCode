/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    let postfix = 1;
    const result = Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i += 1) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    for (let i = nums.length - 1; i >= 0; i -= 1) {
        result[i] = result[i] * postfix;
        postfix *= nums[i];
    }

    return result
};

console.log('result:', productExceptSelf([1,2, 3, 4]));

/*
[1,2, 3, 4]
prefix [1,1, 2, 6]
postfix [24,12,4,1]
*/