// day 44_1
// 압축

function solution(msg) {
    var answer = [];
    
    // 사전 작성
    const dict = {}
    for(let i = 1; i <= 26; i++) {
        dict[String.fromCharCode(i + 64)] = i
    }
    let maxIdx = 26
    
    let idx = 0
    let msgLen = msg.length
    while(idx < msgLen) {
        let currentMaxStr = ""
        for(let j = idx; j < msgLen; j++) {
            const target = msg.substring(idx, j + 1)
            if(dict[target]) {
                currentMaxStr = target
            } else {
                dict[target] = ++maxIdx
                break
            }
        }
        answer.push(dict[currentMaxStr])
        // idx를 currentMaxStr 만큼 증가
        idx += currentMaxStr.length
    }
    
    return answer;
}