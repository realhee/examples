// day19_1
// 최댓값과 최솟값

function solution(s) {
    var answer = "";
    var array = s.split(" ");
    array.sort((a,b) => {
        return a-b;
    })
    answer = array[0] + " " + array[array.length-1];
    console.log(array);
    return answer;
}