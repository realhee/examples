// day6_2
// 이상한 문자 만들기

function solution(s) {
    var answer = '';
    var strArr = s.split(' ');

    answer = strArr.map((value, i) => {
        return value.split('').map((val, index) => {
            if((index+1) % 2 == 0) return val.toLowerCase();
            else return val.toUpperCase();
        }).join("");
        }).join(" ");
    return answer;
}

/*
// 정규식 활용
function toWeirdCase(s){
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
}
*/