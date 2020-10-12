// day7_1
// 정수 제곱근 판별

function solution(n) {
    var sqrt = Math.sqrt(n); // 제곱근
    var res = Math.floor(sqrt); // 정수로 내림
    if(n == res * res)
        return Math.pow(res + 1, 2); // 다시 제곱하기
    else if(n % n == 0) return -1;
}
