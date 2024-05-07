function getMex(arr) {
    const mp = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (mp.has(arr[i])) {
            mp.set(arr[i], mp.get(arr[i]) + 1);
        } else {
            mp.set(arr[i], 1);
        }
    }
 
    // Initialize MEX to 0
    let mex = 0;
 
    // Iterate through non-negative integers from 0 to N
    for (let i = 0; i <= arr.length; i++) {
        // Find the first integer with a frequency of 0 in the map
        if (!mp.has(i) || mp.get(i) === 0) {
            mex = i;
            break;
        }
    }
 
    // Return MEX as the answer
    return mex;
}

function countMexSubsequence(arr, l, r) {
    const res = [];
    const subset = [];
    function getSubset(nums) {
        res.push(Array.from(subset));
    
        for (let i = 0; i < nums.length; i += 1) {
            subset.push(nums[i]);
            getSubset(nums.slice(i + 1));
            subset.pop();
        }
    }

    // const newArr = [];

    // for (let i = 0; i < arr.length; i += 1) {
    //     if (arr[i] >= l && arr[i] <= r) {
    //         newArr.push(arr[i]);
    //     }
    // }

    getSubset(arr);

    let count = 0;
    for (let i = 0; i < res.length; i += 1) {
        const mex = getMex(res[i]);
        if (mex >= l && mex <= r) {
            console.log(res[i]);
            count += 1;
        }
    }

    return count;
}

console.log('countMexSubsequence', countMexSubsequence([0, 1, 2], 1, 2));