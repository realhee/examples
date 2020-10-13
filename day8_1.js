// day8_1
// 평균 구하기

function solution(arr) {
    var answer = 0;
    answer = arr.reduce((acc, val) => {
        return acc + val;
    })
    answer = answer / (arr.length);
    return answer;
}