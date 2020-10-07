// day3_1
// 가운데 글자 가져오기


function solution(s) {
    var num = Math.floor(s.length/2);
    if (s.length % 2 == 0) {
        return s[num-1]+s[num];
    } else {
        return s[num]; 
    }
}
