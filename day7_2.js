// day7_2
// 제일 작은 수 제거하기

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1)
    return arr.length ? arr : [-1]
}