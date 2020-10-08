// day3_5
// 문자열 내 마음대로 정렬하기 - localeCompare


function solution(strings, n) {
    var answer = [];
    answer = strings.sort((a, b)=> {
        return a[n] == b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]);
    });
    return answer;
}
