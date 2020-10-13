// day8_2
// 하샤드 수

function solution(x) {
    var arr = x.toString().split("");
    var sum = arr.reduce((acc, val) => {
        return acc + Number(val);
    }, 0);
    // var sum = arr.reduce((acc, val) => +acc + +val);
    return x % sum == 0 ? true : false;
}