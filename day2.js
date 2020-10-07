// day2
// 완전탐색
// 모의고사

function solution(answers) {
    let answer = [];
    let pattern = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
     
    let scores = [0,0,0];
    answers.map((v,i)=>{
        pattern.forEach((val,idx)=>{
            let cur = val.shift();
            if(cur === v) {scores[idx]++;}
            pattern[idx].push(cur);
        })
    })
    let max = Math.max(...scores);
    scores.forEach((v,i)=>{
        if(v===max) answer.push(i+1);
    })
    return answer;
}
 
let answers = [1,2,3,4,5];
solution(answers);