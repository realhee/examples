// day6_5
// 정수 내림차순으로 배치하기

function solution(n) {
    var answer = 0;
    var arr = n.toString().split('');

    arr.sort((a,b) => a-b).reverse();

    return parseInt(arr.map(a => +a).join(""));
}