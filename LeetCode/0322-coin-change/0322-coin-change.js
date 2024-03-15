/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
    const dp = new Array(amount+1).fill(-1);

    dp[0] = 0;

    coins.sort((a,b)=>a-b).forEach(coin => {
        for(let i=coin; i<=amount; i++) {
            if(dp[i-coin] === -1) continue;
            if(dp[i]===-1){
                dp[i] = dp[i-coin] + 1;
                continue;
            }
            dp[i] = Math.min(dp[i-coin] + 1, dp[i])
        }
    })

    return dp[amount];
};