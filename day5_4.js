// day5_4
// 두 개 뽑아서 더하기 - indexOf / Set & 펼침 연산자

function solution(numbers) {
    var answer = [];

    for(var i=0; i < numbers.length; i++) {
        for(var j=i+1; j < numbers.length; j++) {
            var sum = numbers[i] + numbers[j];
            if(answer.indexOf(sum) == -1)
                answer.push(sum);
        }
    }
    return answer.sort((a,b) =>a-b);
}

/*
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}
*/