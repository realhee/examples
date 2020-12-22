// day 56_1
// 정수 삼각형

function solution(triangle) {
    for (let i = triangle.length - 1; i > 0; i--) {
      // console.log(i)
      for (let j = 0; j < triangle[i - 1].length; j++) {
        // console.log(j)
        triangle[i - 1][j] += Math.max(triangle[i][j], triangle[i][j + 1]);
      }
    }
    return triangle[0][0];
  }