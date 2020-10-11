// day6_3
// 자릿수 더하기

function solution(n)
{
    var answer = 0;
    var str = n.toString();
    var strArr = str.split('');
    for(var i=0; i<strArr.length; i++) {
        answer += parseInt(strArr[i]);
    }
    return answer;
}

/*
// reduce 활용
function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}
*/