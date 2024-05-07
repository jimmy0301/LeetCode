/** 
* @param {number[]} coins
* @param {number} amount
* @return {number}
**/
function coinChange(coins, amount) {
    const dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for (let i = 1; i <= amount; i += 1) {
        for(let j = 0; j < coins.length; j += 1) {
            const coin = coins[j];
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    if (dp[amount] === amount + 1) {
        return -1;
    }

    return dp[amount];
}