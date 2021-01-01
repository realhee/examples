// day 65_1
// 멀리 뛰기

const MOD = 1234567;
const dp = [0, 1, 2];

function solution(n) {
    return fivo(n);
}

function fivo(n){
    if(n <= 2) return dp[n];
    if(dp[n]) return dp[n];
    else return dp[n] = (fivo(n - 1) + fivo(n - 2)) % MOD;
}