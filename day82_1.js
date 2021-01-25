// day 82_1
// 올바른 괄호

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