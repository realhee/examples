// day9_2
// 행렬의 덧셈 - 이중 map

function solution(arr1, arr2) {
    return arr1.map((a, i) => 
           a.map((x, j) => x + arr2[i][j])
    );
}
