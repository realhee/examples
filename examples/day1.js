// day 1
// 크레인 인형뽑기 게임
function solution(board, moves) {
    let result = 0;
    let size = board.length;
    let num = 0;
    let pocket = [];
    moves.forEach(move=>{
        let cnt = 0;
        while(true){
            
            if (board[cnt][move-1] !== 0){
                // 바구니에 인형이 있는데 잡은 인형과 같으면 터트린다
                if (pocket.length !== 0 && pocket[pocket.length-1] === board[cnt][move-1]){
                    pocket.pop();
                    result += 2;
                }else{
                // 그렇지 않다면 잡아서 옮긴다
                    pocket.push(board[cnt][move-1]);
                }
                board[cnt][move-1] = 0;
                break;
            }
            cnt ++;
            if(cnt === size)
                break;
        }
    })
    return result;
}