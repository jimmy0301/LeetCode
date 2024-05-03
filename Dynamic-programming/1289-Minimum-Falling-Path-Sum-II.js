// Method 1 
// Time complexity: O(n^3)
// Space complexity: O(n^ 2);

function minFallingPathSum(grid) {
    const n = grid.length;
    const dp = new Array(n).fill().map(o => Array(n).fill(Number.MAX_SAFE_INTEGER));
    dp[0] = grid[0];

    for (let i = 1; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) {
            for (let k = 0; k < n; k += 1) {
                if (j !== k) {
                    dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + grid[i][j]);
                }
            }
        }
    }


    return Math.min(...dp[n - 1]);
}

// Method 2
// Time complexity: O(n^2)
// Space complexity: O(1);

function minFallingPathSum2(grid) {
    const n = grid.length;
    let firstMin = 0;
    let secondMin = 0;
    let prevFistMinIndex = - 1;

    for (let i = 0; i < n; i += 1) {
        let newFirstMin = Number.MAX_SAFE_INTEGER;
        let newSecondMin = Number.MAX_SAFE_INTEGER;
        let newPrevFirstMinIndex = -1;

        for (let j = 0; j < n; j += 1) {
            const currSum = (prevFistMinIndex !== j ? firstMin : secondMin) + grid[i][j];

            if (currSum < newFirstMin) {
                newSecondMin = newFirstMin;
                newFirstMin = currSum;
                newPrevFirstMinIndex = j;
            } else if (currSum < newSecondMin) {
                newSecondMin = currSum;
            }
        }

        firstMin = newFirstMin;
        secondMin = newSecondMin;
        prevFistMinIndex = newPrevFirstMinIndex;
    }


    return firstMin;
}