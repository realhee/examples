// day 55_1
// 단어 변환

function bfs(search, target, words, count, result) {
    let queue = []
    //형제부터 우선 탐색
    for (let i = 0; i < words.length; i++) {
      let unmatch = words[i].split("").reduce((acc, cur, idx) => {
        return cur !== search[idx] ? acc + 1 : acc
      }, 0)
  
      //search를 words중 하나로 바꿀 수 있는 경우
      if (unmatch === 1) {
        if (target === words[i]) {
          //바꾼글자가 target인 경우 result에 추가
          result.push(count + 1)
        }
  
        let clone = words.slice()
        clone.splice(1, i)
        queue.push({
          search: words[i],
          words: clone,
        })
      }
    }
  
    if (queue.length) {
      count++
      for (let i = 0; i < queue.length; i++) {
        bfs(queue[i].search, target, queue[i].words, count, result)
      }
    }
  }
  
  function solution(begin, target, words) {
    var result = []
    //target으로 아예 바꿀 수 없는 경우
    if (words.findIndex(word => word === target) < 0) {
      return 0
    }
  
    bfs(begin, target, words, 0, result)
    return Math.min.apply(null, result)
  }


  