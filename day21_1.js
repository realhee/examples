// day21_1
// 삼각 달팽이

function solution(n) {
    const results = []
    for (let i = 1 ; i <=n ; i ++){
        results.push(Array.from({length:i},()=>0))
    }
    let counter = 1,startColumn=0,startRow=0,endRow=n-1,endColumn=n-1,cnt=0;
    while (startColumn<=endColumn&&startRow<=endRow){
      //맨왼쪽줄
        for (let i = startRow; i<=endRow; i++){
            results[i][startColumn]=counter
            counter++
        }
        startRow++
        startColumn++
      //맨아래줄
        for (let i = startColumn; i<=endColumn; i++){
            results[endRow][i]=counter
            counter++
        }
        endColumn--
        endRow--
      //대각선줄
        for(let i = endRow; i>=startRow; i--){
          results[i][results[i].length-1-cnt]=counter
          counter++
        }
        endColumn--
        startRow++
        cnt++
    }
    
    return results.flat();
}