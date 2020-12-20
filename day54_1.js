// day 54_1
// 섬 연결하기

function solution(n, costs) {
    let answer = 0, // return 할 cost 정보
      island = [], // 이어진 섬 정보
      bridge = [], // 지어진 다리 정보
      total = 0 //지어진 다리 갯수
  
    //최대한 적은 비용을 맞추기 위해 비용 순으로 오름차순 정렬
    costs.sort((a, b) => {
      return a[2] - b[2]
    })
  
    // 첫번째 값부터 담고 시작(가장 적은 비용이니까)
    island[costs[0][0]] = true
    island[costs[0][1]] = true
    bridge[0] = true
    answer += costs[0][2]
    total += 2
  
    //모든 다리를 다 지을때 까지
    while (total < n) {
      //전체 다리 정보를 순회
      for (let i = 1; i < costs.length; i++) {
        let [start, end, cost] = costs[i]
  
        // 1. 해당 다리를 짓지 않았고
        // 2-1. start 섬은 연결 된 상태에 end 섬은 연결 안된 경우
        // 2-2. 혹은 end 섬은 연결 된 상태에 start 섬은 연결 안된 경우
        if (
          !bridge[i] &&
          ((island[start] && !island[end]) || (!island[start] && island[end]))
        ) {
          //해당 섬/다리/비용 정보 추가
          island[start] = true
          island[end] = true
          bridge[i] = true
          answer += cost
          total++
          break
        }
      }
    }
  
    return answer
  }