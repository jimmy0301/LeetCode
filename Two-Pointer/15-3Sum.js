/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    const n = nums.length;

    // Sort the first
    nums.sort((a, b) => a - b);
    if (nums[0] > 0) {
        return [];
    }
    for (let i = 0; i < n; i += 1) {
        let l = i + 1;
        let r = nums.length - 1;
        if (i - 1 >= 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                while ((l + 1) < n && nums[l] === nums[l + 1]) {
                    l += 1;
                }

                while ((r - 1) >= 0 && nums[r] === nums[r - 1]) {
                    r -= 1;
                }
                l += 1;
                r -= 1;
            } else if (sum < 0) {
                l += 1;
            } else {
                r -= 1;
            }
        }
    }

    return res;
};