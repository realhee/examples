// day25_1
// 조이스틱

function solution(name) {
    var answer = 0;
    var exp = name.length - 1;
    var z = 'Z'.charCodeAt(0);
    var a = 'A'.charCodeAt(0);
    for(var i = 0; i < name.length; i++){
        var c = name[i].charCodeAt(0);
        answer += (z - c + 1) > c - a ? c - a : (z - c + 1);
        if(c == a){
            var nextIdx = i+1;
            var countA = 0;
            while (nextIdx < name.length &&
                name.charAt(nextIdx) == 'A'){
                countA++;
                nextIdx++;
            }
            var tmp = 
            ( name.charAt(0)=='A'? 0 : (i-1)*2 )
                                    + (name.length-(1+i+countA));
            if(exp > tmp) exp = tmp;
        }
    }
    answer += exp;
    return answer;
}