// day 71_1
// 하노이의 탑

function solution(n) {
    let answer = [];
    const hanoi = (num, start, mid, end) => {
        if(num === 1) {
            answer.push([start, end]);
            return;
        }

        hanoi(num - 1, start, end, mid);
        answer.push([start, end]);
        hanoi(num -1, mid, satrt, end);
    }
    hanoi(n, 1, 2, 3);
    return answer;
}