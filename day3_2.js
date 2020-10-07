// day3_2
// 같은 숫자는 싫어

function solution(arr){
    return arr.filter((val,index) => val != arr[index+1]);
}