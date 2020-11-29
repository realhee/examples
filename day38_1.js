// day 38_1
// 숫자의 표현

function solution(n){
	var answer = []
    var sum = 0
    for(var i=1; i<=n; i++){
    	var pointer = i
        sum = pointer
      	if(sum == n){
          answer.push([pointer])
          break;
        }
      for(var j=i+1; j<=n; j++){
      	sum = sum+j
        if(sum == n){
          answer.push([pointer, j])
          break;
        } else if (sum > n){
          break;
        }
      }
    }
  return answer.length
}