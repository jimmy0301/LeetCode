// Hash set and prefix sum
// Time complexity: O(n)
// Space complexity: O(n)

function numSubarraysWithSum(nums, goal) {
    const n = nums.length;
    const count = new Map();
    let res = 0;

    count.set(0, 1);
    let currSum = 0;
    for (let i = 0; i < n; i += 1) {
        currSum += nums[i];

        if (count.has(currSum - goal)) {
            res += count.get(currSum - goal);
        }

        count.set(currSum, (count.get(currSum) || 0) + 1);
    }

    return res;
}

// Sligin window
// Time complexity: O(n)
// Space complexity: O(1)

function numSubarraysWithSum1(nums, goal) {
    const n = nums.length;
    let l = 0;
    let res = 0;

    let currSum = 0;
    for (let r = 0; r < n; r += 1) {
        currSum += nums[r];

        while (l < r && currSum > goal) {
            currSum -= nums[l];
            l += 1
        }

        if (currSum < goal) {
            continue;
        }

        if (currSum === goal) {
            res += 1;
        }
        
        // 左邊界如果有 0 不影響 sum，但是也可以成為新的子字串，所以個數要加一
        /*
            Input: nums = [1,0,1,0,1], goal = 2
            Output: 4
            Explanation: The 4 subarrays are bolded and underlined below:
            [1,0,1,0,1]
            [1,0,1,0,1]
            [1,0,1,0,1]
            [1,0,1,0,1] => nums[2: 5] => 1, 0, 1 此組合需要這個 for 找出

        */
        for (let j = l; j < r && nums[j] === 0; j += 1) {
            res += 1;
        }
    }

    return res;
}