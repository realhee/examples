// day10_1
// 기능개발

function solution(progresses, speeds) {
    var answer = [];
    var days = [];

    //배포가능일(몇일 뒤)
    for(var i=0; i<progresses.length; i++){
        days.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    console.log(days);

    //실제 배포가능일**
    while(days.length>0){
        var first = days[0];
        var count = days.findIndex(num=> first<num);
        console.log(first, count)
        if(count !== -1){
            answer.push(count);
            days.splice(0, count);
        }else{
            answer.push(days.length);
            days.splice(0, days.length);
        }
    }

    return answer;
}


/*
function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}
*/