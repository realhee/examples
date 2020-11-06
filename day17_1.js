// day 17_1
// 가장 큰 정사각형 찾기

// 다이나믹 프로그래밍(Dynamic Programming)으로 푸는 문제
function solution(board)
{
    var x_len = board[0].length
    var y_len = board.length
    var answer = 0
    
  // 배열의 행과 열이 1이면 정사각형은 무조건 1이 나온다. // 0이 나올수도 있긴함.
    if(x_len < 2 || y_len <2 ) return 1
    
  // 1부터 쭉 탐색하면서 자신의 왼쪽 왼쪽상단, 상단 3개의 값을 비교하며 값을 채워넣는다.
    for(var i=1;i<y_len;i++){
        for(var j=1;j<x_len;j++){
            if(board[i][j]>0){
                let min = Math.min(board[i-1][j-1], board[i][j-1], board[i-1][j])
                board[i][j] = min+1
            } 
            if(answer < board[i][j]){
                answer = board[i][j]
            }
        }
    }
    return answer * answer
}