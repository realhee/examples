// day12_1
// 124 나라의 숫자

function solution(n) { 
    var answer = '';
  	var temp = n;
 
   while(temp>0) {
      if (temp%3 === 0){
          answer =  '4' + answer;
        temp = temp/3 -1;
      }else if(temp%3 === 1){
        answer = '1' + answer;
        temp = Math.floor(temp/3);

      }else{
        answer = '2'+answer;
        temp =Math.floor(temp/3);
      } 
	}
    return answer;
}
/*
    function change124(n) {
    return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
    }

    // 아래는 테스트로 출력해 보기 위한 코드입니다.
    console.log(change124(10));
*/