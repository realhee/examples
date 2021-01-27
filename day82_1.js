// day 82_1
// 올바른 괄호
/*
function solution(s) {
    if(s[s.length -1]!=")")
        return false;

    let result = 0;
    for(let i=0; i<s.length; i++) {
        (s[i]=="(")? result ++ : result--;
        
        if(result < 0)
            return false;
    }
    return (result)? false : true;
}
*/
// 2번째 풀이
function solution(s){
    var answer = true;
    let left = 0;
    let right = 0;
    for(let i=0; i< s.length  ; i++){
        if(s[i]==="("){
            left++;
        }
        if(s[i]===")"){
            right++;
        }
        if(right > left ){
            return false;
        }
    }
    if(left!==right){
        return false;
    }
    return true;
}