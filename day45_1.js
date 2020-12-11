// day 45_1
// JadenCase 문자열 만들기

function solution(s) {
    var answer = '';
    var arr = [];
  
    arr=s.split(' ');
    answer = arr.map(str=> (str === '') ? '' : str.toLowerCase())
      .map(str=> (str === '') ? '' : str.replace(str[0], str[0].toUpperCase()))
      .join(' ');

    return answer;
}