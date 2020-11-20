// day 29_1
// 점프와 순간이동

function solution(n){
    var answer = 0;
  
    while(n>0){
       if(n%2!==0){
           n = n-1;
           answer = answer+1;
       }else{
           n = n/2;
       }
    }
    return answer;
}