// day 30_1
// 예상 대진표

function solution(n,a,b){
    var answer = 0;
    var numA = a;
    var numB = b;
    
  	while(numA!=numB){
      numA = Math.ceil(numA /2);
      numB = Math.ceil(numB /2);
      answer = answer + 1;
  }

  return answer
}