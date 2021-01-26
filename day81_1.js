// day 81_1
// 트리 트리오 중간값

function solution(array) {
    if (array.length == 0) return NaN; // 빈 배열은 에러 반환(NaN은 숫자가 아니라는 의미임)
    var center = parseInt(array.length / 2); // 요소 개수의 절반값 구하기
  
    if (array.length % 2 == 1) { // 요소 개수가 홀수면
      return array[center]; // 홀수 개수인 배열에서는 중간 요소를 그대로 반환
    } else {
      return (array[center - 1] + array[center]) / 2.0; // 짝수 개 요소는, 중간 두 수의 평균 반환
    }
  }