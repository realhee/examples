// day6_1
// 약수의 합

function solution(n) {
    var answer = 0;
    for(var i = 1; i <= n; i++) {
        if(n%i===0) answer += i;
    }
    return answer;
}