// day 40_1
// 피보나치 수

function solution(num){
    var answer = 0;
    var memo = [];
    
    memo[0]=0;
    memo[1]=1;
    
    for(var i=2; i<num+1; i++){
      memo[i] = (memo[i-1] + memo[i-2])% 1234567  ;
    }
    
    answer = memo[num];
    return answer;
  }