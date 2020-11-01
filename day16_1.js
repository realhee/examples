// day16_1
// 위장

// 옷 종류 별로 한가지만 입는 경우를 1씩 더한다음 곱하고, 아무것도 안 입는 경우는 없으므로 1을 뺸다.
// (parts+1) * (parts+1) - 1

function solution(clothes) {
    var answer = 1;

    var sorts = {};
    for(var cloth of clothes) {
        if(sorts[cloth[1]]) {
            sorts[cloth[1]]++;
        } else {
            sorts[cloth[1]]=1;
        }
    }
    for(var i of Object.keys(sorts)) {
        answer*=sorts[i]+1;
    }

    return answer - 1;
}
