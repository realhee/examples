// day 64_1
// 거스름돈
/*
function solution(n, money) {
    let dp = [1];
    for(let i = 0 ; i < n ; ++i) dp.push(0);
    
    money.map(unit => {
        dp[unit] += 1;
        for(let i = unit + 1 ; i <= n ; ++i){
            dp[i] += dp[i - unit];
        }
    });
        
    return dp[n];
}
*/


// 두 번째 풀이
function solution(n, money) {
    const cache = [];
    for (let i = 0; i <= n; i++){
        cache[i] = i % money[0] ? 0 : 1;
    }
    for (let i = 1; i < money.length; i++){
        for(let j = money[i]; j <= n; j++){
            cache[j] += cache[j - money[i]];
        }
    }
    return cache[n] % 1000000007;
}
