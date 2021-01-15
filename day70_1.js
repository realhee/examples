// day 70_1
// 최고의 집합

function solution(n, s) {
    var answer = [];
    if (n > s) {
      return [-1];
    }
    // 반올림 루프
    for (let i = 0; i < n; i++) {
      const number = Math.round(s/(n-i));
      answer.push(number);
      s = s - number;
    }
    return answer;
}