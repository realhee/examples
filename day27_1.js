// day 27_1
// 짝지어 제거하기

function solution(s){
    var answer = 0
    var temp = []
    for(var i=0; i<s.length; i++){
      if(temp.length == 0 || temp[temp.length-1] !== s[i]){
        temp.push(s[i])
      } else if(temp[temp.length-1] == s[i]){
        temp.pop()
      }
    }
    if(temp.length == 0) answer = 1
    
    return answer
  }