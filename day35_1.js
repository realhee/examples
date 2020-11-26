// day 35_1
// 올바른 괄호

function solution(s){
	var temp = []
    for(var i=0; i<s.length; i++){
    	if(s[i] == '('){
        	temp.push(s[i])
        } else {
        	if(temp[temp.length-1] == '('){
            	temp.pop()
            } else {
            	temp.push(s[i])
            }
        
        }
    }
    if(temp.length>0){
    	return false 
    } else {
    	return true 
    }
}