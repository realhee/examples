// day 11_1
// 프린터
function solution(priorities, location) { //중요도, 요청 문서 index
    let target_index = location; //user가 선택한 index
    let answer = 1;
    let first = -1;
    
    while (priorities.length > 0) {
        //1. 가장 앞에 있는 문서를 추출
        first = priorities.shift();
        //2. 중요도 높은 문서가 존재 시 뒤로 넣음
        if (priorities.some((value, index) => value > first)) {
            priorities.push(first);
        }
        else {
            if (target_index === 0) {
                break;
            }
            else answer ++;
        }
        /*3. 사용자가 선택한 문서가 중요도가 제일 높지 않은 경우
             현재 대기목록의 맨 끝으로 index를 옮긴다.
        */
        if (target_index === 0) target_index = priorities.length - 1;
        else target_index --;
    }
    return answer;
}