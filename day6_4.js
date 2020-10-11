// day6_4
// 자연수 뒤집어 배열로 만들기

function solution(n) {
    var answer = [];
    var arr = (n+"").split('');

    var answer = arr.reverse().map(a => {
        return +a;
    });
    return answer;
}