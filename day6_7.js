// day6_7
// 예산

function solution(d, budget) {
    let answer = 0;
    var count = 0;

    d.sort((a,b)=>(a-b));

    for (let index = 0;index< d.length; index++) {
        answer += d[index];
        count++;
        if (answer > budget) {
            count--;
            break;
        }
    }
    return count;
}