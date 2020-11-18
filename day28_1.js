// day 28_1
// 폰켓몬

function solution(nums) {
    var answer = 0;
    var num = nums.length/2;
    var newArr= [];


    //주어진 배열에서 구할 수 있는 최대값 구하기
    //num 정렬
    nums.sort((a,b)=>a-b);
    newArr.push(nums[0]);
    //중복 제거
    for(var i=1; i<nums.length; i++){
        if(nums[i-1]!==nums[i]){
           newArr.push(nums[i]);
         }
    }
    //최대값
    var max = newArr.length;
    
    if(max<=num){
        answer = max;
    }else{
        answer = num;
    }
    return answer;
}