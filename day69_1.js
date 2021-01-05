// day 69_1
// 줄 서는 방법

function solution(n, k) {
    var answer = [];
    let arr = [];
    for (let i = 1; i <= n; i++) arr.push(i);
    let fac = arr.reduce((acc, val) => acc * val, 1);
    k--;
    while (answer.length !== n) {
      fac = fac / arr.length;
      // console.log(fac);
      let temp = arr[Math.floor(k / fac)];
      answer.push(temp);
      k = k % fac;
      arr = arr.filter(e => e !== temp);
    }
    return answer;
  }

