// day7_4
// 키패드 누르기

function solution(numbers, hand) {
    return numbers.reduce((ac, v)=>{
        switch(v) {
            case 1: case 4: case 7: return {a:ac.a+"L", l:v, r:ac.r};
            case 3: case 6: case 9: return {a:ac.a+"R", l:ac.l, r:v};
            default : 
                if(v==0) v=11;
                var ld = getDist(v, ac.l);
                var rd = getDist(v, ac.r);
                return ld > rd ? {a:ac.a+"R", l:ac.l, r:v} : 
                    ld < rd ? {a:ac.a+"L", l:v, r:ac.r} : 
                    hand == "right" ? {a:ac.a+"R", l:ac.l, r:v} : {a:ac.a+"L", l:v, r:ac.r};
        }
    }, {a:"", l:10, r:12}).a;
}
function getDist(n, h) {
    var t = Math.abs(n-h);
    return parseInt(t/3 + t%3);
}