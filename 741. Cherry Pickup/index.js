/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
    let size = grid.length;
    let dp = [];
    // 初始化 dp
    for (let r = 0; r < size; r++) {
        dp[r] = Array.apply(null, Array(size)).map(function (i) {
            return -1;
        });
    }

    dp[0][0] = grid[0][0];
    for (let step = 1; step < (size << 1) - 1; step++) {
        for (let i = Math.min(size - 1, step); i >= 0 && i >= step - (size - 1); i--) {
            for (let p = Math.min(size - 1, step); p >= 0 && p >= step - (size - 1); p--) {
                let j = step - i;
                let q = step - p;

                if (grid[i][j] === -1 || grid[p][q] === -1) {
                    dp[i][p] = -1;
                    continue;
                }

                if (j > 0 && p > 0) {
                    dp[i][p] = Math.max(dp[i][p], dp[i][p - 1]);
                }
                if (i > 0) {
                    if (p > 0) {
                        dp[i][p] = Math.max(dp[i][p], dp[i - 1][p - 1]);
                    }
                    if (q > 0) {
                        dp[i][p] = Math.max(dp[i][p], dp[i - 1][p]);
                    }
                }
                if (dp[i][p] === -1) {
                    continue;
                }
                if (i === p) {
                    dp[i][p] += grid[i][j];
                } else {
                    dp[i][p] += grid[i][j] + grid[p][q];
                }
            }
        }
        // console.log(JSON.parse(JSON.stringify(dp)));
    }

    // console.log(dp);
    return Math.max(dp[size - 1][size - 1], 0);
};