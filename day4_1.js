// day4_1
// 문자열 내 p와 y의 개수 - toUpperCase, spilt


function solution(s) {
    var upperCase = s.toUpperCase();
    
    var p = upperCase.split("P").length;
    var y = upperCase.split("Y").length;

    if(p == y) return true;
    else return false;
}