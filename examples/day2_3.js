// day2_3
// 2016년

function solution(a, b) {
    
    var date = new Date(`2016,${a},${b}`);
    var day = (date+"").split(' ');
    return day[0].toUpperCase();
}

